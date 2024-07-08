
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';


let lightbox;

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => createImageCard(image)).join('');
    if (lightbox) {
    lightbox.refresh();
    } else {
    lightbox = new SimpleLightbox('.gallery a');
    }
}

function createImageCard(image) {
    return `
    <div class="photo-card">
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
        <p class="info-item">
            <b>Likes:</b> ${image.likes}
        </p>
        <p class="info-item">
            <b>Views:</b> ${image.views}
        </p>
        <p class="info-item">
            <b>Comments:</b> ${image.comments}
        </p>
        <p class="info-item">
            <b>Downloads:</b> ${image.downloads}
        </p>
        </div>
    </div>
    `;
}

export function showError(message) {
    iziToast.error({
    title: 'Error',
    message: message,
    });
}

export function showLoading() {
    document.querySelector('.loading').style.display = 'block';
}

export function hideLoading() {
    document.querySelector('.loading').style.display = 'none';
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}