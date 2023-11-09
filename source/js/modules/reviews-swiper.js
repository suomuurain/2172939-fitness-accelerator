const swiperReviews = new Swiper('.reviews__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-btn--next',
    prevEl: '.reviews__swiper-btn--prev',
  },
});
