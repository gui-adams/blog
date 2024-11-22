"use client";

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { createPost } from '../services/postService';
import { toast } from 'sonner';

const PostForm = dynamic(() => import('../components/PostForm').then((mod) => mod.PostForm), { ssr: false });

export default function NewPostPage() {
    const router = useRouter();

    const handleSave = async (
        title: string,
        content: string,
        slug: string,
        published: boolean,
        image: File | null,
        categories: string[]
    ) => {
        try {
            if (image) {
                await createPost(title, content, slug, published, image, categories);
            } else {
                console.warn("Imagem não foi fornecida.");
                await createPost(title, content, slug, published, new File([], ""), categories);
            }
            toast.success("Post criado com sucesso!");
            router.push('/portal/blog/post');
        } catch {
            toast.error("Erro ao criar post.");
        }
    };
    

    return (
        <main>
            <h1>Novo Post</h1>
            <PostForm onSave={handleSave} />
        </main>
    );
}
