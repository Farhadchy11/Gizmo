import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice.jsx";

const ProductItems = ({ pd }) => {
  const dispatch = useDispatch();

  const addToWishList = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc
    };

    dispatch(addToCart(obj));
  };
  //container grid grid-cols-3 grid-rows-3 gap-4
  return (
    <div
      key={pd.id}
      class="mx-auto border border-gray-300 shadow-md bg-white pb-5 "
    >
      <Link
        to={`/product/${pd.id}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={pd.imgSrc} class=" max-h-55 mx-auto  object-scale-down " />
      </Link>
      <div class="text-center px-5 text-black mx-auto">
        <h3 class="text-lg font-medium">{pd.title}</h3>
        <p class="text-base">{pd.description}</p>
        <button class="text-base  ">${pd.price}</button>
        <br />
        <button
          onClick={() =>
            addToWishList(pd.id, pd.price, pd.title, pd.description, pd.imgSrc)
          }
          class="text-center"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
