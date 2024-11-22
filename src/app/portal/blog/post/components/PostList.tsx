// src/app/portal/blog/post/components/PostList.tsx
interface PostListProps {
    posts: { id: string; title: string; content: string; slug: string; published: boolean }[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export function PostList({ posts, onEdit, onDelete }: PostListProps) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <strong>{post.title}</strong> - {post.slug} ({post.published ? 'Publicado' : 'Rascunho'})
                    <button onClick={() => onEdit(post.id)}>Editar</button>
                    <button onClick={() => onDelete(post.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}
