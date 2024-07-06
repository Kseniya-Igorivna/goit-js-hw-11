
const API_KEY = '44810429-780319b334a9c60538a2ecf11';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error('Failed to fetch images');
    }
    return await response.json();
}