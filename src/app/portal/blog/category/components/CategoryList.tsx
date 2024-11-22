// src/app/portal/blog/category/components/CategoryList.tsx
interface CategoryListProps {
    categories: { id: string; name: string; slug: string }[];
    onEdit: (category: { id: string; name: string; slug: string }) => void;
    onDelete: (id: string) => void;
}

export function CategoryList({ categories, onEdit, onDelete }: CategoryListProps) {
    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <strong>{category.name}</strong> - {category.slug}
                    <button onClick={() => onEdit(category)}>Editar</button>
                    <button onClick={() => onDelete(category.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}
