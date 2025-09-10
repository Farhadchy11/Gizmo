//import React from "react";
//import Homeproducts from "../Product/Homeproducts.jsx";
//import Categories from "./Categories/Categories.jsx";
//import "./home.css";
import Banner from "./Banner/Banner.jsx";
import BannerTwo from "./BannerTwo/BannerTwo.jsx";
import TrendingProducts from "./Collections/TrendingProducts.jsx";
import DiscountBanner from "./Discount/DiscountBanner.jsx";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback.jsx";
import Partners from "./Partners/Partners.jsx";

const Home = () => {
  return (
    <div class="w-screen">
      <Banner />
      {/* <div className="w-screen">
        <Categories />
      </div> */}
      <div className="w-screen">
        <BannerTwo />
      </div>
      <div className="w-screen">
        <TrendingProducts />
      </div>
      <div className="w-screen">
        <DiscountBanner />
      </div>
      <div className="w-screen">
        <CustomerFeedback />
      </div>
      <div className="w-screen">
        <Partners />
      </div>
    </div>
  );
};

export default Home;
