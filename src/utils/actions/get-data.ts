export async function getDataHome() {
    const API_URL = 'https://api.cosmicjs.com/v3/buckets/sw-production/objects';
    const OBJECT_ID = '6749d7073dbd639ab303fd19'; // ID ou slug do objeto
    const READ_KEY = 'GnK9JiFA4FgAolKGrCg42YhKAJW0n2nW1x0zSqejXY9hhEOrtc';

    try {
        const res = await fetch(`${API_URL}/${OBJECT_ID}?read_key=${READ_KEY}&pretty=true&depth=1&props=slug,title,metadata,type`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        // Garante que o erro seja tratado adequadamente
        if (err instanceof Error) {
            throw new Error(`Failed to fetch data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch data: Unknown error occurred');
        }
    }
}
