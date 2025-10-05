import CartItems from "./CartItems.jsx";
import { useSelector } from "react-redux";
import { selectCartTotalAmount } from "./cartSlice.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectCartTotalAmount);

  return (
    <div class="flex flex-col items-center mx-auto pb-10 ">
      <div>
        {cartProduct.map((pd) => (
          <CartItems pd={pd} />
        ))}
      </div>
      <div class="flex gap-2 p-2">
        <h1> Subtotal:</h1>
        <h1>${totalPrice}</h1>
      </div>
      <Link to={"/Payment"}>
        <button class="bg-black text-white p-2">Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
