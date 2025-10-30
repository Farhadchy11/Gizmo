import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/cartSlice.jsx";

const ProductsDetailsPage = () => {
  const product = useLoaderData();

  const dispatch = useDispatch();

  const addToWishList = (_id, price, title, des, imgSrc) => {
    const obj = {
      _id,
      price,
      title,
      des,
      imgSrc,
    };

    dispatch(addToCart(obj));
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 p-6 mt-20 md:p-10 md:w-11/12 md:mx-auto md:mt-32 md:mb-20">
        <div className="flex flex-col md:flex-row gap-3 md:w-1/2">
          <img
            src={product.imgSrc}
            alt="Product"
            className="w-96 h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold">{product.title}</h2>

          <p className="text-2xl font-bold mt-2">$ {product.price}</p>

          <p className="my-4">{product.des}</p>

          <button
            onClick={() =>
              addToWishList(
                product._id,
                product.price,
                product.title,
                product.des,
                product.imgSrc
              )
            }
            class="text-center px-4 bg-black text-white "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailsPage;
