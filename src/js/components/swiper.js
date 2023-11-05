import Swiper, { Navigation, Pagination, } from 'swiper';
Swiper.use([Navigation, Pagination,]);


const swiperTeam = new Swiper(".team__swiper", {
  slidesPerView: 'auto',
  observer: true,
  observeParents: true
})

const swiper = new Swiper(".slider__swiper", {
  slidesPerView: 'auto',
  spacebetween: 20,
  observer: true,
  observeParents: true
})






