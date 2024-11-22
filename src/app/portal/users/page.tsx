"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/services/app';
import { toast } from 'sonner';  // Usado para exibir notificações
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getCookieClient } from '@/lib/cookieClient';

export default function User() {
    const router = useRouter();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação de nova senha e confirmação
        if (newPassword !== confirmPassword) {
            toast.error("A nova senha e a confirmação não correspondem.");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = getCookieClient();
            if (!token) {
                toast.error("Token de autenticação não encontrado");
                return;
            }

            const response = await api.put('/backblog/auth/update-password', 
                { oldPassword, newPassword },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                toast.success("Senha atualizada com sucesso!");
                router.push('/portal');  // Redireciona para a página principal ou outra de sua escolha
            }
        } catch (error) {
            toast.error("Erro ao atualizar senha. Verifique se a senha atual está correta.");
            console.error("Erro ao atualizar senha:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            <h1>Alterar Senha</h1>
            <form onSubmit={handlePasswordChange} style={{ maxWidth: '400px', margin: 'auto' }}>
                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label htmlFor="oldPassword">Senha Atual:</label>
                    <input
                        type={showOldPassword ? "text" : "password"}
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '8px' }}
                    />
                    <span
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
                    >
                        {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label htmlFor="newPassword">Nova Senha:</label>
                    <input
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '8px' }}
                    />
                    <span
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
                    >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label htmlFor="confirmPassword">Confirme a Nova Senha:</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '8px' }}
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    {isSubmitting ? 'Atualizando...' : 'Alterar Senha'}
                </button>
            </form>
        </main>
    );
}
