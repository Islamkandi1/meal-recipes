
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import imgs from "./../../assets/imag"

import { Pagination } from 'swiper/modules';

export default function SwiperItem() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imgs.pizza} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.frutePizza} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.corn} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.garlic} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.pasta} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.scampi} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
        <SwiperSlide><img src={imgs.Buffalo} className='w-100 object-fit-cover h-100' alt="pizza" /></SwiperSlide>
      </Swiper>
    </>
  );
}
