"use client";

import { useRouter } from 'next/navigation';
import { UserForm } from '../components/UserForm';
import { registerUser } from '../services/userService';
import { toast } from 'sonner';

export default function NewUserPage() {
    const router = useRouter();

    const handleSave = async (name: string, email: string, password: string, role: string) => {
        try {
            await registerUser(name, email, password, role);
            toast.success("Usuário registrado com sucesso!");
            router.push('/portal/blog/user'); // Redireciona para a lista de usuários
        } catch {
            toast.error("Erro ao registrar usuário.");
        }
    };

    return (
        <main>
            <h1>Novo Usuário</h1>
            <UserForm onSave={handleSave} />
        </main>
    );
}
