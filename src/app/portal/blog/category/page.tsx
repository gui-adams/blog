"use client";  // Indica que o Next.js deve renderizar este componente apenas no cliente

import { useState, useEffect } from 'react';
import { CategoryForm } from './components/CategoryForm';
import { CategoryList } from './components/CategoryList';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from './services/categoryService';
import { toast } from 'sonner';

interface Category {
    id: string;
    name: string;
    slug: string;
}

export default function CategoryPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            setCategories(data.reverse());
        } catch (error) {
            toast.error("Erro ao carregar categorias.");
        }
    };

    const handleAddOrEditCategory = async (id: string | null, name: string, slug: string) => {
        try {
            if (id) {
                const updatedCategory = await updateCategory(id, name, slug);
                setCategories(categories.map(cat => (cat.id === id ? updatedCategory : cat)));
                toast.success("Categoria editada com sucesso!");
            } else {
                const newCategory = await createCategory(name, slug);
                setCategories([newCategory, ...categories]);
                toast.success("Categoria adicionada com sucesso!");
            }
            setEditingCategory(null);
        } catch {
            toast.error(id ? "Erro ao editar categoria." : "Erro ao adicionar categoria.");
        }
    };

    const handleDeleteCategory = async (id: string) => {
        try {
            await deleteCategory(id);
            setCategories(categories.filter(cat => cat.id !== id));
            toast.success("Categoria excluída com sucesso!");
        } catch (error) {
            toast.error("Erro ao excluir categoria. Verifique o console para mais detalhes.");
            console.error("Erro ao tentar excluir a categoria:", error);
        }
    };
    
    return (
        <main>
            <h1>Gerenciamento de Categorias</h1>
            <CategoryForm
                onSubmit={handleAddOrEditCategory}
                editingCategory={editingCategory}
                onCancel={() => setEditingCategory(null)}
            />
            <CategoryList
                categories={categories}
                onEdit={setEditingCategory}
                onDelete={handleDeleteCategory}
            />
        </main>
    );
}
