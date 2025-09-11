import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { review } from "../../Data/reviewData.jsx";
import ReviewCom from "./ReviewCom.jsx";

const CustomerFeedback = () => {
  const [products, setProducts] = useState([...review]);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
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
          slidesToShow: 3,
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
    <div className="w-full  sm:pt-15 px-3 pb-6 sm:pb-0 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72  rounded-full -translate-x-36 -translate-y-36 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full translate-x-48 translate-y-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <h1 class=" text-2xl text-white text-center mb-6 sm:mb-10  bg-clip-text text-transparent">
          OUR CUSTOMER FEEDBACK
        </h1>

        {/* Products Slider */}
        <div className="  relative slider-container">
          <Slider {...settings}>
            {products.map((review, index) => (
              <div key={review.id} className="px-3">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <ReviewCom review={review} />
                </div>
              </div>
            ))}
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
