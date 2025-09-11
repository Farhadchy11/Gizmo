//import Homeproducts from "../Product/Homeproducts.jsx";
import Categories from "./Categories/Categories.jsx";
import Banner from "./Banner/Banner.jsx";
import BannerTwo from "./BannerTwo/BannerTwo.jsx";
import TrendingProducts from "./TrendingProducts/TrendingProducts.jsx";
import DiscountBanner from "./Discount/DiscountBanner.jsx";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback.jsx";
import Partners from "./Partners/Partners.jsx";

const Home = () => {
  return (
    <div class="">
      <Banner />
      <div className="">
        <Categories />
      </div>
      <div className="">
        <BannerTwo />
      </div>
      <div className="">
        <TrendingProducts />
      </div>
      <div className="">
        <DiscountBanner />
      </div>
      <div className="">
        <CustomerFeedback />
      </div>
      <div className="">
        <Partners />
      </div>
    </div>
  );
};

export default Home;
