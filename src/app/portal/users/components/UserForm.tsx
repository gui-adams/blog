import { useState } from 'react';
import styles from './UserForm.module.scss';

interface UserFormProps {
    onSave: (name: string, email: string, password: string, role: string) => void;
}

export function UserForm({ onSave }: UserFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER'); // Define o valor padrão como "USER"

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(name, email, password, role);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                className={styles.input}
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={styles.input}
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className={styles.input}
                required
            />
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={styles.input}
            >
                <option value="USER">Usuário</option>
                <option value="ADMIN">Administrador</option>
            </select>
            <button type="submit" className={styles.button}>Salvar</button>
        </form>
    );
}
