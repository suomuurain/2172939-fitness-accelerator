const swiperReviews = new Swiper('.reviews__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
  },
});
