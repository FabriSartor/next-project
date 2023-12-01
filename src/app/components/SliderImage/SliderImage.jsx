"use client"

import './SliderImage.css'
import CarouselComponent from '../carousel/CarouselComponent';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y'

export default function SliderImage() {
  
  return (
  <Swiper
    modules={[Navigation, Pagination, Autoplay, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className='swiperImage'
  >

    <SwiperSlide>
      <CarouselComponent img="https://http2.mlstatic.com/D_NQ_699237-MLA71584901189_092023-OO.webp"/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselComponent img="https://http2.mlstatic.com/D_NQ_837465-MLA72462644842_102023-OO.webp"/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselComponent img="https://http2.mlstatic.com/D_NQ_734093-MLA72527713092_102023-OO.webp"/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselComponent img="https://http2.mlstatic.com/D_NQ_707503-MLA72462968282_102023-OO.webp"/>
    </SwiperSlide>

  </Swiper>
  )
}