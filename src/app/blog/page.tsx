import styles from "./Blog.module.scss";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./components/Pagination";

// Definindo a interface do post
interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
    published: boolean;
    imagePath: string;
    categories: Array<{ id: string; name: string }>;
    createdAt: string;
    updatedAt: string;
}

interface BlogProps {
    searchParams: { page?: string };
}

// Função para buscar e ordenar os posts
const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://backblog.simpleway.tech/backblog/post", {
        cache: "no-store"
    });
    const posts: Post[] = await response.json();

    // Ordena os posts do mais recente para o mais antigo com base em updatedAt ou createdAt
    return posts.sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt).getTime();
        const dateB = new Date(b.updatedAt || b.createdAt).getTime();
        return dateB - dateA; // Mantém o mais recente no topo
    });
};

// Componente principal do Blog
const Blog = async ({ searchParams }: BlogProps) => {
    let posts = await fetchPosts();

    // Filtra apenas os posts publicados
    posts = posts.filter(post => post.published);

    // Obtém o número da página a partir dos parâmetros de consulta, padrão é 1
    const currentPage = parseInt(searchParams.page || "1", 10);
    const postsPerPage = 8;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Calcula o índice inicial e final dos posts para a página atual
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>Todos os Artigos</h1>
            <section className={styles.artigosGrid}>
                {currentPosts.map((post) => (
                    <div key={post.id} className={styles.artigoCard}>
                        <Link href={`/blog/${post.id}/${post.slug}`}>
                            <div className={styles.artigoHeader}>
                                <Image
                                    src={post.imagePath || '/default-thumbnail.jpg'}
                                    alt={post.title || 'Artigo sem título'}
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
            </section>

            {/* Componente de Paginação */}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </main>
    );
};

export default Blog;
