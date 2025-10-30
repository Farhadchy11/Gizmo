import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import mobileImg from "../img/category-1_x100.webp";
import laptopImg from "../img/category-4_x100.avif";
import watchImg from "../img/category-6_x100.avif";
import airpodsImg from "../img/category-5_x100.webp";
import speakerImg from "../img/category-7_x100.avif";

const ResponsiveSwiper = () => {
  return (
    <div className="w-full  px-4 py-8 sm:py-20 bg-black text-white relative overflow-hidden">
      <h1 class=" text-lg sm:text-2xl text-white text-center pb-5 sm:pb-10  bg-clip-text text-transparent">
        TRENDING CATEGORIES
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        navigation
        breakpoints={{
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div class=" flex flex-col items-center mx-auto">
            <div class=" flex flex-col items-center mx-auto  ">
              <img
                src={mobileImg}
                class=" h-40 w-40 mx-auto  object-scale-down"
              />
            </div>
            <Link to={"/Products"} class="">
              <h1 class="text-lg text-center mt-2 ">Mobiles</h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class=" flex flex-col items-center mx-auto">
            <div class=" flex flex-col items-center mx-auto  ">
              <img
                src={laptopImg}
                class=" h-40 w-40 mx-auto  object-scale-down"
              />
            </div>
            <Link to={"/Products"} class="">
              <h1 class="text-lg text-center mt-2 ">Laptops</h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class=" flex flex-col items-center mx-auto">
            <div class=" flex flex-col items-center mx-auto  ">
              <img
                src={watchImg}
                class=" h-40 w-40 mx-auto  object-scale-down"
              />
            </div>
            <Link to={"/Products"} class="">
              <h1 class="text-lg text-center mt-2 ">Watch</h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class=" flex flex-col items-center mx-auto">
            <div class=" flex flex-col items-center mx-auto  ">
              <img
                src={airpodsImg}
                class=" h-40 w-40 mx-auto  object-scale-down"
              />
            </div>
            <Link to={"/Products"} class="">
              <h1 class="text-lg text-center mt-2 ">Airpods</h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class=" flex flex-col items-center mx-auto">
            <div class=" flex flex-col items-center mx-auto  ">
              <img
                src={speakerImg}
                class=" h-40 w-40 mx-auto  object-scale-down"
              />
            </div>
            <Link to={"/Products"} class="">
              <h1 class="text-lg text-center mt-2 ">speaker</h1>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResponsiveSwiper;
