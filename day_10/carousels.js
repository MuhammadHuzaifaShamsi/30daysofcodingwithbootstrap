var swiper = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".testimonials-swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});