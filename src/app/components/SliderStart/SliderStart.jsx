"use client"

import './SliderStart.css'
import TitulosHome from '../TitulosHome/TitulosHome';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';
import 'swiper/css/a11y'
const productsStart = require('/ingenieria de sofware 2/next-project/src/app/mocks/productos-inicio.json')

export default function SliderStart() {
    return (
      <>
        <Swiper
          modules={[Navigation,  A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='swiperStart h-[27rem] w-[1290px]'
        >
          <SwiperSlide className='px-[45px]'>
            <ProductCard {...productsStart}/>
          </SwiperSlide>
          <SwiperSlide className='px-[45px]'>
            <ProductCard {...productsStart}/>
          </SwiperSlide>
          <SwiperSlide className='px-[45px]'>
            <ProductCard {...productsStart}/>
          </SwiperSlide>
          <SwiperSlide className='px-[45px]'>
            <ProductCard {...productsStart}/>
          </SwiperSlide>
        </Swiper>
      </>
    )
}




