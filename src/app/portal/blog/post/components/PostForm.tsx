"use client";

import { useEffect, useState, ChangeEvent } from 'react';
import { fetchCategories } from '../services/postService';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PostFormProps {
    title?: string;
    content?: string;
    slug?: string;
    published?: boolean;
    image?: File | null;
    imageUrl?: string; // URL da imagem salva no backend
    categories?: string[];
    onSave: (title: string, content: string, slug: string, published: boolean, image: File | null, categories: string[]) => void;
}

export function PostForm({ title = '', content = '', slug = '', published = false, image = null, imageUrl = '', categories = [], onSave }: PostFormProps) {
    const [postTitle, setPostTitle] = useState(title);
    const [postContent, setPostContent] = useState(content);
    const [postSlug, setPostSlug] = useState(slug);
    const [postPublished, setPostPublished] = useState(published);
    const [postImage, setPostImage] = useState<File | null>(image);
    const [previewImage, setPreviewImage] = useState(imageUrl || '');  
    const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);
    const [availableCategories, setAvailableCategories] = useState<{ id: string; name: string }[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Carregar valores iniciais para edição apenas uma vez
    useEffect(() => {
        if (!isInitialized && (title || content || slug || imageUrl || categories.length > 0)) {
            setPostTitle(title);
            setPostContent(content);
            setPostSlug(slug);
            setPostPublished(published);
            setPostImage(image);
            setSelectedCategories(categories);
            setPreviewImage(imageUrl || '');  // Define a imagem inicial com a URL do backend
            setIsInitialized(true); 
        }
    }, [title, content, slug, published, image, imageUrl, categories, isInitialized]);

    // Carregar categorias disponíveis
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setAvailableCategories(categoriesData);
            } catch (error) {
                console.error("Erro ao carregar categorias.");
            }
        };
        loadCategories();
    }, []);

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedCategories(selectedOptions);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPostImage(file);
            setPreviewImage(URL.createObjectURL(file));  // Atualiza a pré-visualização com o novo arquivo selecionado
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(postTitle, postContent, postSlug, postPublished, postImage, selectedCategories);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)} 
                placeholder="Título"
                required
            />
            <ReactQuill
                value={postContent}
                onChange={setPostContent}
                placeholder="Conteúdo"
            />
            <input
                type="text"
                value={postSlug}
                onChange={(e) => setPostSlug(e.target.value)}  
                placeholder="Slug"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={postPublished}
                    onChange={(e) => setPostPublished(e.target.checked)} 
                />
                Publicado
            </label>
            <label>
    <           span>Imagem</span>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                />
                {previewImage ? (
                    <img src={previewImage} alt="Pré-visualização" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
                ) : (
                    imageUrl && <img src={imageUrl} alt="Imagem Salva" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
                )}
            </label>
            <label>Categorias</label>
            <select multiple value={selectedCategories} onChange={handleCategoryChange}>
                {availableCategories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button type="submit">Salvar</button>
        </form>
    );
}
