import axios from 'axios';

export async function googleOauth(code) {
    return await axios.get(`${import.meta.env.VITE_APP_API_URI}/auth/google?code=${code}`);
}

