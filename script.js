const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  grabCursor: true,
  initialSlide: 0,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function myFunction(x) {
  x.classList.toggle("change");

  var dropdown = document.getElementById("burgerDropdown");
  dropdown.classList.toggle("open");
}
