import { useState, useEffect } from 'react';

interface CategoryFormProps {
    onSubmit: (id: string | null, name: string, slug: string) => Promise<void>; // Alteração feita aqui
    editingCategory: { id: string; name: string; slug: string } | null;
    onCancel: () => void;
}

export function CategoryForm({ onSubmit, editingCategory, onCancel }: CategoryFormProps) {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    useEffect(() => {
        if (editingCategory) {
            setName(editingCategory.name);
            setSlug(editingCategory.slug);
        } else {
            setName('');
            setSlug('');
        }
    }, [editingCategory]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(editingCategory ? editingCategory.id : null, name, slug);
        setName('');
        setSlug('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome da categoria"
                required
            />
            <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Slug da categoria"
                required
            />
            <button type="submit">{editingCategory ? 'Atualizar' : 'Adicionar'}</button>
            {editingCategory && <button type="button" onClick={onCancel}>Cancelar</button>}
        </form>
    );
}
