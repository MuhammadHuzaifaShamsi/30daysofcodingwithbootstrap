var swiper = new Swiper(".hero-swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".testimonials-swiper", {
  effect: "coverflow",
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});