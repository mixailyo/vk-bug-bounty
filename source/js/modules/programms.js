function programmsInit() {
  const swiper = new Swiper('.programms__slider', {

    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      1023: {
        slidesPerView: 2,
        grid: {
          fill: 'row',
          rows: 3,
        },
      },
      // when window width is >= 640px
      1279: {
        slidesPerView: 3,
        grid: {
          fill: 'row',
          rows: 3,
        },
      }
    },

    spaceBetween: 8,

    // Navigation arrows
    navigation: {
      nextEl: '.programms__navigation-btn--next',
      prevEl: '.programms__navigation-btn--prev',
    },
  });
}

export { programmsInit }