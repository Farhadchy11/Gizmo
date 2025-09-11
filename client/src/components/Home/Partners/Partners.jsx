import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import parnersLogo1 from "../img/partner-logo-1.avif";
import parnersLogo2 from "../img/partner-logo-2.webp";
import parnersLogo3 from "../img/partner-logo-3.avif";
import parnersLogo4 from "../img/partner-logo-4.webp";
import parnersLogo5 from "../img/partner-logo-5.avif";
const Partners = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full sm:py-15 px-4 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72  rounded-full -translate-x-36 -translate-y-36 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full translate-x-48 translate-y-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="  relative slider-container">
          <Slider {...settings}>
            <img src={parnersLogo1} class=" sm:mx-auto object-scale-down" />

            <img src={parnersLogo2} class=" sm:mx-auto object-scale-down" />

            <img src={parnersLogo3} class=" sm:mx-auto object-scale-down" />

            <img src={parnersLogo4} class=" sm:mx-auto object-scale-down" />

            <img src={parnersLogo5} class=" sm:mx-auto object-scale-down" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12  hover:bg-blue-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl rounded-full z-20 flex items-center justify-center transition-all duration-300 group"
      onClick={onClick}
    >
      <AiOutlineRight className="text-xl text-gray-600 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200" />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-2 top-1/2  transform -translate-y-1/2 w-12 h-12  hover:bg-blue-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl rounded-full z-20 flex items-center justify-center transition-all duration-300 group"
      onClick={onClick}
    >
      <AiOutlineLeft className="text-xl text-gray-600 group-hover:text-blue-600 group-hover:-translate-x-0.5 transition-all duration-200" />
    </button>
  );
};

export default Partners;
