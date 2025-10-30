import { Suspense, lazy } from "react";
import Categories from "../../features/Home/components/Categories/Categories.jsx";
import Banner from "../../features/Home/components/Banner/Banner.jsx";
import BannerTwo from "../../features/Home/components/BannerTwo/BannerTwo.jsx";
import DiscountBanner from "../../features/Home/components/Discount/DiscountBanner.jsx";
const CustomerFeedback = lazy(() =>
  import("../../features/Home/components/CustomerFeedback/CustomerFeedback.jsx")
);
const Partners = lazy(() =>
  import("../../features/Home/components/Partners/Partners.jsx")
);

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
        <DiscountBanner />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerFeedback />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
    </div>
  );
};

export default Home;
