
import { fetchImages } from './js/pixabay-api.js';

import { renderGallery, showError, showLoading, hideLoading } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = form.querySelector('input[name="query"]');

    form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (query === '') {
        showError('Please enter a search query');
        input.value = '';
    return;
    }

    try {
    showLoading();
    const data = await fetchImages(query);
    hideLoading();
    if (data.hits.length === 0) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        input.value = '';
    } else {
        renderGallery(data.hits);
    }
    } catch (error) {
    hideLoading();
    showError('Failed to fetch images. Please try again later.');
    }
    });
});