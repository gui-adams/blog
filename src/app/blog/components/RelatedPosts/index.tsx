import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./RelatedPosts.module.scss"; // Arquivo de estilo específico para RelatedPosts

// Definindo a interface do post
interface Post {
  id: string;
  title: string;
  slug: string;
  imagePath?: string;
  categories: Array<{ id: string; name: string }>;
  published: boolean; // Propriedade adicionada para verificar se o post está publicado
}

// Definindo as propriedades esperadas para o componente RelatedPosts
interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  // Filtra apenas os posts publicados
  const publishedPosts = posts.filter(post => post.published);

  // Limita a exibição a 4 posts
  const displayedPosts = publishedPosts.slice(0, 4);

  return (
    <section className={styles.relatedSection}>
      <h2 className={styles.relatedTitle}>Posts relacionados</h2>
      <div className={styles.relatedGrid}>
        {displayedPosts.map((post) => (
          <div key={post.id} className={styles.relatedCard}>
            <Link href={`/blog/${post.id}/${post.slug}`}>
              <div className={styles.relatedImage}>
                <Image
                  src={post.imagePath || '/default-thumbnail.jpg'} // Imagem padrão
                  alt={post.title || 'Artigo sem título'}
                  width={300}
                  height={200}
                  className={styles.image}
                />
                {post.categories.length > 0 && (
                  <span className={styles.categoria}>{post.categories[0].name}</span>
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3 className={styles.title}>{post.title}</h3>
                <span className={styles.botao}>Ler mais →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
