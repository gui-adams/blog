// src/app/portal/blog/category/services/categoryService.ts
import { api } from '@/services/app';
import { getCookieClient } from '@/lib/cookieClient';

export const fetchCategories = async () => {
    const token = getCookieClient();
    const response = await api.get('/backblog/category', {
        headers: {
            Authorization: `Bearer ${token}`, // Inclui o token de autenticação
        },
    });
    return response.data;
};

export const createCategory = async (name: string, slug: string) => {
    const token = getCookieClient();

    if (!token) {
        console.error("Token de autenticação ausente.");
        throw new Error("Autenticação necessária.");
    }

    const response = await api.post(
        '/backblog/category',
        { name, slug },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const updateCategory = async (id: string, name: string, slug: string) => {
    const token = getCookieClient();
    if (!token) {
        throw new Error("Autenticação necessária.");
    }

    const response = await api.put(
        `/backblog/category/${id}`,
        { name, slug },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const deleteCategory = async (id: string) => {
    const token = getCookieClient();
    if (!token) {
        throw new Error("Autenticação necessária.");
    }

    console.log("Token de autenticação:", token); // Log do token

    try {
        const response = await api.delete(`/backblog/category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("Resposta da exclusão:", response); // Log da resposta
        return response.data;
    } catch (error) {
        console.error("Erro ao tentar excluir a categoria:", error);
        throw error;
    }
};
