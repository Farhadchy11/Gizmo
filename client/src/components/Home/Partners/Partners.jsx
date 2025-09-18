import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import parnersLogo1 from "../img/partner-logo-1.avif";
import parnersLogo2 from "../img/partner-logo-2.webp";
import parnersLogo3 from "../img/partner-logo-3.avif";
import parnersLogo4 from "../img/partner-logo-4.webp";
import parnersLogo5 from "../img/partner-logo-5.avif";

const ResponsiveSwiper = () => {
  return (
    <div className="w-full  px-4 py-8 sm:py-20 bg-black text-white relative overflow-hidden">
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
          <img src={parnersLogo1} class=" mx-auto object-scale-down" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parnersLogo2} class=" mx-auto  object-scale-down" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parnersLogo3} class=" mx-auto object-scale-down" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parnersLogo4} class=" mx-auto object-scale-down" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parnersLogo5} class=" mx-auto object-scale-down" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResponsiveSwiper;
