import { api } from '@/services/app';
import { getCookieClient } from '@/lib/cookieClient';

export const registerUser = async (name: string, email: string, password: string, role: string) => {
    const token = getCookieClient();
    const response = await api.post('/backblog/auth/register', { name, email, password, role }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
