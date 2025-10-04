import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader  = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(
    ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="gallery-stats"><span class="gallery-stat-label">Likes</span><span class="gallery-stat-value">${likes}</span></div>
          <div class="gallery-stats"><span class="gallery-stat-label">Views</span><span class="gallery-stat-value">${views}</span></div>
          <div class="gallery-stats"><span class="gallery-stat-label">Comments</span><span class="gallery-stat-value">${comments}</span></div>
          <div class="gallery-stats"><span class="gallery-stat-label">Downloads</span><span class="gallery-stat-value">${downloads}</span></div>
        </div>
      </li>`
  ).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
