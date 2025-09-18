import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ResponsiveSwiper = () => {
  return (
    <div className="w-full  px-4 py-8 sm:py-20 bg-black text-white relative overflow-hidden">
      <h1 class=" text-2xl text-white text-center mb-6 sm:mb-10  bg-clip-text text-transparent">
        OUR CUSTOMER FEEDBACK
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative py-5  sm:py-7 px-2 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="relative overflow-hidden text-center">
              <div className="absolute  inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p>
                "What truly sets Gizmo apart is the commitment to quality. The
                product I received was of top-notch quality, meeting and even
                surpassing the specifications mentioned on the website."
              </p>
            </div>

            <div class="flex pt-4 ">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1757071946~exp=1757075546~hmac=25e0075896f84d96ac3679a981340c55f3e445ec8d35b19bd27a1d64432450ac&w=1060"
                class=" max-h-15 rounded-full object-scale-down"
              />
              <div class=" flex-col pl-2">
                <h1 class="text-lg font-semibold"> William Brown </h1>
                <h1 class="text-blue-500 bg-clip-text">
                  Customer Of Our Shop{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative py-5  sm:py-7 px-2 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="relative overflow-hidden text-center">
              <div className="absolute  inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p>
                "The range of products available is extensive,and the detailed
                product descriptions and specifications provided helped me make
                an informed decision. The checkout process was smooth and
                secure."
              </p>
            </div>

            <div class="flex pt-4 ">
              <img
                src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?t=st=1757071986~exp=1757075586~hmac=5a7cffd9541e36d6ae69d56d3c8810c0b8df1a6383f8e1363f6669267440b91d&w=1060"
                class=" max-h-15 rounded-full object-scale-down"
              />
              <div class=" flex-col pl-2">
                <h1 class="text-lg font-semibold"> Robert Miller </h1>
                <h1 class="text-blue-500 bg-clip-text">
                  Customer Of Our Shop{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative py-5  sm:py-7 px-2 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="relative overflow-hidden text-center">
              <div className="absolute  inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p>
                "I am incredibly impressed with Gizmo's selection of laptops.
                The quality is top-notch and the prices are incredibly
                affordable. I will definitely be recommending Gizmo to all my
                friends and family."
              </p>
            </div>

            <div class="flex pt-4 ">
              <img
                src="https://pbs.twimg.com/profile_images/1154666340298493952/F57OFDN7_400x400.jpg"
                class=" max-h-15 rounded-full object-scale-down"
              />
              <div class=" flex-col pl-2">
                <h1 class="text-lg font-semibold"> Liam Johnson</h1>
                <h1 class="text-blue-500 bg-clip-text">
                  Customer Of Our Shop{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative py-5  sm:py-7 px-2 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
            <div className="relative overflow-hidden text-center">
              <div className="absolute  inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p>
                "The website's layout is intuitive, making it easy to find the
                latest gadgets and electronics. I recently purchased a speaker
                from Gizmo, and I was impressed."
              </p>
            </div>

            <div class="flex pt-4 ">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?t=st=1757072041~exp=1757075641~hmac=95ed26dbb632790f88290157b994a6997932fa446bc7272bd03a7b497be9e7da&w=1060"
                class=" max-h-15 rounded-full object-scale-down"
              />
              <div class=" flex-col pl-2">
                <h1 class="text-lg font-semibold"> James Smith</h1>
                <h1 class="text-blue-500 bg-clip-text">
                  Customer Of Our Shop{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResponsiveSwiper;
