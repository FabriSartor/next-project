"use client"

import 'swiper/css';
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y'
import CategoryItem from './CategoryItem/CategoryItem';
import './SliderCategorias.css'

export default function SliderCategorias() {

  const linkAutos = "https://www.mercadolibre.com.ar/c/autos-motos-y-otros#c_id=/home/categories/element&c_uid=b0593c16-5c77-4b20-afbe-4c1823875ed2"
  const linkCompus = "https://www.mercadolibre.com.ar/c/computacion#c_id=/home/categories/element&c_uid=f3336ea1-66bb-48cf-85fc-34f31577006c"

  const iconCar = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16"><path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/></svg>
  const iconComputer = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/></svg>
  const iconElectro = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16"><path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/><path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM1 3v3h14V3H1Zm14 4H1v7h14V7Z"/></svg>
  const iconSport = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/></svg>
  const iconInmuebles = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
  const iconPersonalCare = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"/><path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"/></svg>
  const iconJuegos = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/></svg>
  
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='swiperCategorias h-[19.14rem] mb-5 w-[1290px]'
    >
      <SwiperSlide className='pl-[48px]'>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkCompus}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkAutos}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
      </SwiperSlide>
      <SwiperSlide className='pl-[48px]'>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkCompus}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkAutos}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
      </SwiperSlide>
      <SwiperSlide className='pl-[48px]'>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkAutos}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
        <div className='flex flex-row'>
          <CategoryItem titulo="Autos, Motos y Otros" icon={iconCar} link={linkAutos}/>
          <CategoryItem titulo="Computación" icon={iconComputer} link={linkAutos}/>
          <CategoryItem titulo="Electrodomésticos y Aires Ac." icon={iconElectro} link={linkAutos}/>
          <CategoryItem titulo="Deportes y Fitness" icon={iconSport} link={linkAutos}/>
          <CategoryItem titulo="Inmuebles" icon={iconInmuebles} link={linkAutos}/>
          <CategoryItem titulo="Belleza y Cuidado Personal" icon={iconPersonalCare} link={linkAutos}/>
          <CategoryItem titulo="Juegos y Juguetes" icon={iconJuegos} link={linkAutos}/>
        </div>
      </SwiperSlide>
    </Swiper>
    )
}