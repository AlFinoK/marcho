import Swiper from 'swiper/bundle'

const homeSwiper = new Swiper('.top-swiper__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const thumbLargeSwiper = new Swiper('.goods__mini-swiper', {
  slidesPerView: 4,
  loop: true,
  allowTouchMove: false,
  effect: 'creative',
})

const thumbMiniSwiper = new Swiper('.goods__large-swiper', {
  slidesPerView: 1,
  allowTouchMove: false,
  effect: 'creative',
  navigation: {
    nextEl: '.goods__large-next',
    prevEl: '.goods__large-prev',
  },
  loop: true,
  thumbs: {
    swiper: thumbLargeSwiper,
  },
})
