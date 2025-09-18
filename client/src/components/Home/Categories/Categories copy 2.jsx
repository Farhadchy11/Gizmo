import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import mobileImg from "../img/category-1_x100.webp";
import laptopImg from "../img/category-4_x100.avif";
import watchImg from "../img/category-6_x100.avif";
import airpodsImg from "../img/category-5_x100.webp";
import speakerImg from "../img/category-7_x100.avif";

const CustomerFeedback = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
           initialSlide: 1,
           arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full  px-4 py-8 sm:py-20 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72  rounded-full -translate-x-36 -translate-y-36 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full translate-x-48 translate-y-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}

        <h1 class=" text-lg sm:text-2xl text-white text-center pb-5 sm:pb-10  bg-clip-text text-transparent">
          TRENDING CATEGORIES
        </h1>

        {/* Products Slider */}
        <div className="  relative slider-container">
          <Slider {...settings}>
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

export default CustomerFeedback;
