const swiperJury = new Swiper('.jury__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.jury__swiper-button--next',
    prevEl: '.jury__swiper-button--prev',
  },
});
