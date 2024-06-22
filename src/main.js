import './js/pixabay-api';
import './js/render-function';

// console.log(btnEl);
import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-function';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from './img/alert-icon.svg';
// import listEl from './js/render-function'

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form-input');
const imagesList = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

// loaderEl.style.display = 'none';

formEl.addEventListener('submit', e => {
  e.preventDefault();
  imagesList.innerHTML = '';
  // loaderEl.style.display = 'inline-block';
//   loaderEl.classList.toggle('.visually-hidden');

  const request = e.target.elements.photo.value.trim();
  //   console.log(request);

  if (request === '') {
    showIziToast();
  } else {
      showLoader();
      getImages(request)
      .then(data => {
        inputEl.value = '';
        //   loaderEl.style.display = 'none';
        if (data.total === 0) {
          showIziToast();
        } else {
          return imagesTemplate(data.hits);
        }
      })
      .catch(err => alert(err))
      .finally(() => hideLoader());
  }
});

function showIziToast() {
  return iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '0.03em',
    titleColor: '#fff',
    titleSize: '16',
    titleLineHeight: '0.03em',
    position: 'topRight',
    backgroundColor: '#ef4040',
    theme: 'dark',
    iconUrl: imageUrl,
    iconColor: '#FAFAFB',
  });
};

function showLoader() {
  loaderEl.classList.remove('hidden');
}

function hideLoader() {
  loaderEl.classList.add('hidden');
}
