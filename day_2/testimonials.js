var swiper = new Swiper(".swiper-testimonial", {
  effect: "flow",
  grabCursor: true,
  slidesPerView: "1",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
