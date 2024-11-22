"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostList } from './components/PostList';
import { fetchPosts, deletePost } from './services/postService';
import { toast } from 'sonner';

interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
    published: boolean;
}

export default function PostListPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const data = await fetchPosts();
            setPosts(data.reverse());
        } catch {
            toast.error("Erro ao carregar posts.");
        }
    };

    const handleDeletePost = async (id: string) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id));
            toast.success("Post excluído com sucesso!");
        } catch {
            toast.error("Erro ao excluir post.");
        }
    };

    const handleEditPost = (id: string) => {
        router.push(`/portal/blog/post/${id}`);
    };

    const handleCreatePost = () => {
        router.push(`/portal/blog/post/new`);
    };

    return (
        <main>
            <h1>Lista de Posts</h1>
            <button onClick={handleCreatePost}>Novo Post</button>
            <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
        </main>
    );
}
