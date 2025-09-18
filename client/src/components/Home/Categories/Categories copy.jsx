//import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import mobileImg from "../img/category-1_x100.webp";
//import laptopImg from "../img/category-4_x100.avif";
//import watchImg from "../img/category-6_x100.avif";
//import airpodsImg from "../img/category-5_x100.webp";
//import speakerImg from "../img/category-7_x100.avif";

const ResponsiveSwiper = () => {
  return (
    <Swiper
      // Optional: default settings for screens larger than any defined breakpoint
      slidesPerView={3}
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  );
};

export default ResponsiveSwiper;
