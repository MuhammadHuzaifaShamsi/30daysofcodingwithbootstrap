var swiper = new Swiper(".hero-swiper-left", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".hero-swiper-right", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
