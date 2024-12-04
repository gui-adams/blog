"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/app/blog/[id]/Post.module.scss";
import { fetchPostById, fetchRelatedPosts } from "../../services/postService";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import RelatedPosts from "../../components/RelatedPosts";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Loader from "../../components/Loader";

interface PostProps {
  params: {
    id: string;
    slug: string;
  };
}

const normalizeDate = (date: string): string => {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
};

const Post = ({ params }: PostProps) => {
  const { id } = params;
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);

        if (postData.categories && postData.categories.length > 0) {
          const categoryIds = postData.categories.map((category: any) => category.id);
          console.log("Categorias do post atual:", categoryIds);

          const related = await fetchRelatedPosts(categoryIds, postData.id);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
        setPost(null);
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <Loader />;

  const articleUrl = `https://simpleway.tech/blog/${post.id}/${post.slug}`;

  return (
    <>
      <Head>
        <title>{post.title} | SimpleWay</title>
        <meta
          name="description"
          content={post.excerpt || `Leia o artigo "${post.title}" e aprenda sobre ${post.categories[0]?.name}.`}
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.excerpt || `Leia o artigo "${post.title}" para saber mais sobre ${post.categories[0]?.name}.`}
        />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={post.imagePath || "/default-image.jpg"} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={articleUrl} />
      </Head>

      <div className={styles.main}>
        {post.categories && post.categories.length > 0 && (
          <span className={styles.category}>{post.categories[0].name}</span>
        )}
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>
          {post.createdAt && !isNaN(Date.parse(normalizeDate(post.createdAt)))
            ? format(parseISO(normalizeDate(post.createdAt)), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
            : "Data inválida"}
        </p>
        <Image
          src={post.imagePath || "/default-image.jpg"}
          alt={`Imagem ilustrativa do artigo ${post.title}`}
          width={800}
          height={400}
          loading="lazy"
        />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className={styles.share}>
          <h2>Compartilhe este artigo</h2>
          <div className={styles.socialIcons}>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`} target="_blank">
              <FaFacebookF />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`} target="_blank">
              <FaTwitter />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} target="_blank">
              <FaLinkedinIn />
            </a>
            <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + articleUrl)}`} target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <>
            <h2>Posts Relacionados</h2>
            <RelatedPosts posts={relatedPosts} />
          </>
        )}
      </div>
    </>
  );
};

export default Post;
