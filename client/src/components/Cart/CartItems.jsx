import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "./cartSlice.jsx";

const CartItems = ({ pd }) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1 && quantity <= 20) {
      dispatch(updateQuantity({ productID: id, quantity: quantity }));
    }
  };

  return (
    <div class="flex flex-row">
      <div class="">
        <img
          src={pd.imgSrc}
          class=" max-h-35 sm:max-h-55 sm:pr-6 mx-auto object-scale-down"
          alt="..."
        />
      </div>

      <div className=" flex flex-row items-center">
        <div class="flex flex-col pr-2 sm:pr-0 sm:flex-row">
          <h5 className="text-sm sm:text-lg sm:pr-6">{pd.title}</h5>
          <h5 class=" text-sm sm:text-lg sm:pr-6">$ {pd.price} </h5>
        </div>

        <div class="border border-black ">
          <button
            className="px-1 sm:px-2"
            onClick={() => handleQuantityChange(pd.id, pd.quantity - 1)}
          >
            -
          </button>
          <input
            class=" border border-black sm:px-2 w-[25px] text-center w-[2px] flex items-center mx-auto"
            type="text"
            min="1"
            max="20"
            value={pd.quantity}
            readonly
          />
          <button
            className=" px-1 sm:px-2 "
            onClick={() => handleQuantityChange(pd.id, pd.quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className=" text-base pl-2 sm:text-lg sm:pl-6  "
          onClick={() => dispatch(removeFromCart(pd.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
