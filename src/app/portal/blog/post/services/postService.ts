// src/app/portal/blog/post/services/postService.ts

import { api } from '@/services/app';
import { getCookieClient } from '@/lib/cookieClient';

export const fetchPosts = async () => {
    const token = getCookieClient();
    const response = await api.get('/backblog/post', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const fetchPostById = async (id: string) => {
    const token = getCookieClient();
    const response = await api.get(`/backblog/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Função para buscar categorias
export const fetchCategories = async () => {
    const token = getCookieClient();
    const response = await api.get('/backblog/category', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Função para criar post com imagem e categorias
export const createPost = async (
    title: string,
    content: string,
    slug: string,
    published: boolean,
    image: File,
    categories: string[]
) => {
    const token = getCookieClient();
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('content', content);
    formData.append('slug', slug);
    formData.append('published', JSON.stringify(published));
    formData.append('image', image);
    categories.forEach((categoryId) => formData.append('categories', categoryId));
    
    const response = await api.post('/backblog/post', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

// Função para atualizar post com imagem e categorias
export const updatePost = async (
    id: string,
    title: string,
    content: string,
    slug: string,
    published: boolean,
    image: File | null,
    categories: string[]
) => {
    const token = getCookieClient();
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('content', content);
    formData.append('slug', slug);
    formData.append('published', JSON.stringify(published));
    if (image) formData.append('image', image);
    categories.forEach((categoryId) => formData.append('categories', categoryId));
    
    const response = await api.put(`/backblog/post/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

// Função para excluir post
export const deletePost = async (id: string) => {
    const token = getCookieClient();
    await api.delete(`/backblog/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
