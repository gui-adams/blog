// src/app/portal/blog/post/[id]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { PostForm } from '../components/PostForm';
import { updatePost, fetchPostById } from '../services/postService';
import { toast } from 'sonner';

export const viewport = "width=device-width, initial-scale=1";

export default function EditPostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    const [published, setPublished] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();
    const { id } = useParams();
    const postId = Array.isArray(id) ? id[0] : id;

    useEffect(() => {
        if (postId) {
            loadPost(postId);
        }
    }, [postId]);

    const loadPost = async (postId: string) => {
        try {
            const post = await fetchPostById(postId);
            setTitle(post.title);
            setContent(post.content);
            setSlug(post.slug);
            setPublished(post.published);
            setImageUrl(post.image || undefined);
            setCategories(post.categories.map((category: any) => category.id));
        } catch {
            toast.error("Erro ao carregar post.");
        }
    };

    const handleSave = async (title: string, content: string, slug: string, published: boolean, image: File | null, categories: string[]) => {
        try {
            if (postId) {
                await updatePost(postId, title, content, slug, published, image, categories);
                toast.success("Post atualizado com sucesso!");
                router.push('/portal/blog/post');
            }
        } catch {
            toast.error("Erro ao atualizar post.");
        }
    };

    return (
        <main>
            <h1>Editar Post</h1>
            <PostForm
                title={title}
                content={content}
                slug={slug}
                published={published}
                image={null}
                imageUrl={imageUrl || undefined}
                categories={categories}
                onSave={handleSave}
            />
        </main>
    );
}
