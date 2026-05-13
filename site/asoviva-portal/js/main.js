// Swiperの設定
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // 画面幅に応じた設定
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  },

  loopAdditionalSlides: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
