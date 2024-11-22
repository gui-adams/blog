"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/app/blog/[id]/Post.module.scss";
import { fetchPostById, fetchRelatedPosts } from "../../services/postService";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "../../components/RelatedPosts";

interface PostProps {
  params: {
    id: string;
    slug: string;
  };
}

const Post = ({ params }: PostProps) => {
  const { id } = params;
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);

        // Busca posts relacionados após carregar o post principal
        if (postData.categories && postData.categories.length > 0) {
          const related = await fetchRelatedPosts(postData.categories[0].id, postData.id);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  // URL fixa para o artigo
  const articleUrl = `https://simpleway.tech/blog/${post.id}/${post.slug}`;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{post.title} | Nome do Site</title>
        <meta name="description" content={`Leia o artigo ${post.title}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={`Leia o artigo ${post.title}`} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={post.imagePath || '/default-image.jpg'} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={`Leia o artigo ${post.title}`} />
        <meta name="twitter:image" content={post.imagePath || '/default-image.jpg'} />
      </Head>

      <div className={styles.main}>
        {/* Informações do Post */}
        {post.categories && post.categories.length > 0 && (
          <span className={styles.category}>{post.categories[0].name}</span>
        )}
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}</p>

        <Image
          src={post.imagePath || "/default-image.jpg"}
          alt={`Imagem ilustrativa do artigo ${post.title}`}
          width={800}
          height={400}
          className={styles.image}
        />

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Seção de compartilhamento */}
        <div className={styles.share}>
          <p>Compartilhe</p>
          <div className={styles.socialIcons}>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" title="Compartilhar no Facebook">
              <FaFacebookF />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" title="Compartilhar no Twitter">
              <FaTwitter />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" title="Compartilhar no LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + articleUrl)}`} target="_blank" rel="noopener noreferrer" title="Compartilhar no WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Seção de Posts Relacionados */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      </div>
    </>
  );
};

export default Post;
