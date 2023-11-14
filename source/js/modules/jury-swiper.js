import Swiper from '../vendor/swiper';

const swiperJury = new Swiper('.jury__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 2,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.jury__swiper-btn--next',
    prevEl: '.jury__swiper-btn--prev',
  },
});

export {swiperJury};
