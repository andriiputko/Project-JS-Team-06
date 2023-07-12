import fonds from './fonds';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import { fonds } from './fonds';

const supportListEl = document.querySelector('.support-list');
const upBtn = document.querySelector('.swiper-next');

upBtn.addEventListener('click', onNext);

function findImage(name, arrImgFounds) {
return arrImgFounds.find(found => found.title === name);
};

function renderMarkup(arr) {
  supportListEl.insertAdjacentHTML('beforeend', arr);
};

const markUp = fonds
  .map(({ title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    const imgfinded = findImage(title, fonds );
    const img = imgfinded.img;    

    return `<li class="support-item swiper-slide">
  <a href="${url}" class="support-link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
  <p class="support-number">${number}</p>
  <img class="support-img" loading="lazy" width="100" height="100"
    srcset="${img.normal} 1x, ${img.retina} 2x"
    src="${img.normal}" type="image/png" alt="${title}">
  
  </a></li>`;
  })
  .join('');

renderMarkup(markUp);
renderMarkup(markUp);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  rewind: true,
  slidesPerView: 4,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

function onNext() {
  swiper.slideNext(350);
}