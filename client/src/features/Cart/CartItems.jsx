import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./cartSlice.jsx";

const CartItems = ({ pd }) => {
  const dispatch = useDispatch();

  const handleQuantityIncrease = (_id) => {
    dispatch(increaseQty({ productID: _id }));
  };

  const handleQuantityDecrease = (_id) => {
    dispatch(decreaseQty({ productID: _id }));
  };

  return (
    <div class="flex flex-row py-5">
      <div class="">
        <img
          src={pd.imgSrc}
          class=" max-h-35 sm:max-h-55  mx-auto object-scale-down"
          alt="..."
        />
      </div>

      <div className=" flex flex-row items-center">
        <div class="flex  flex-col sm:flex-row px-3 gap-2 sm:px-5">
          <h5 className="text-sm sm:text-lg ">{pd.title}</h5>
          <h5 class=" text-sm sm:text-lg ">${pd.price}</h5>
        </div>

        <div class="flex border border-black ">
          <button
            className="px-1 sm:px-2"
            onClick={() => handleQuantityDecrease(pd._id)}
          >
            -
          </button>
          <input
            class=" border-x border-black sm:px-2 w-[35px] text-center flex items-center mx-auto"
            type="text"
            min="1"
            max="10"
            value={pd.quantity}
            readonly
          />
          <button
            className=" px-1 sm:px-2 "
            onClick={() => handleQuantityIncrease(pd._id)}
          >
            +
          </button>
        </div>

        <button
          className=" text-base pl-2 sm:text-lg sm:pl-6  "
          onClick={() => dispatch(removeFromCart(pd._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
