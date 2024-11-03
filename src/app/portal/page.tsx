// src/app/portal/page.tsx
import { useRouter } from 'next/router';
import axios from 'axios';

export default function PortalPage() {
    const router = useRouter();

    const handleLogout = async () => {
        await axios.post('/api/auth/logout');
        router.push('/auth/login');
    };

    return (
        <div>
            <h1>Área de Administração</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}
