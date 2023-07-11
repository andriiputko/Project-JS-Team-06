import fonds from './fonds';
import Swiper, { Navigation } from 'swiper';

// import '.././node_modules/swiper/modules/swiper.min.css';
// import '_../node_modules/swiper/modules/swiper.scss';

// import 'swiper/swiper.min.css';
// import 'swiper/modules/navigation/navigation.min.css';

// import '../../node_modules/swiper/swiper-bundle.min.css';

const list = document.querySelector('#support-list');

const html = fonds.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${img.normal} 1x, ${img.retina} 2x"
                src="${img.normal}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

list.innerHTML = html;

const str = fonds.map((element, index) => {
  return '<li class="support-item"> <a class="support-link" href=""></a></li>';
});

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    480: {
      slidesPerView: 6,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-next',
  },
});