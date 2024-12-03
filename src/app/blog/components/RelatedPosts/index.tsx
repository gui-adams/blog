import Link from "next/link";
import Image from "next/image";
import styles from "@/app/blog/Blog.module.scss"; // Reutiliza os estilos do Blog principal


interface RelatedPostsProps {
  posts: Array<{
    id: string;
    title: string;
    slug: string;
    imagePath?: string;
    categories: Array<{ id: string; name: string }>;
  }>;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>Nenhum post relacionado encontrado.</p>;
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Posts Relacionados</h2>
      <div className={styles.artigosGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.artigoCard}>
            <Link href={`/blog/${post.id}/${post.slug}`}>
              <div className={styles.artigoHeader}>
                <Image
                  src={post.imagePath || "/default-thumbnail.jpg"}
                  alt={post.title || "Artigo sem título"}
                  width={300}
                  height={250}
                  className={styles.artigoImg}
                />
                {post.categories.length > 0 && (
                  <span className={styles.categoria}>{post.categories[0].name}</span>
                )}
              </div>
              <div className={styles.textOverlay}>
                <h3 className={styles.titulo}>{post.title}</h3>
                <span className={styles.botao}>Ler mais →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;