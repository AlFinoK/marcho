import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const homeSwiper = new Swiper('.top-swiper__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
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
  loop: true,
  thumbs: {
    swiper: thumbLargeSwiper,
  },
})

const blogItemSwiper = new Swiper('.blog-standard__item-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

export { homeSwiper, thumbLargeSwiper, thumbMiniSwiper, blogItemSwiper }
