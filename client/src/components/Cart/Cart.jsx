// import ProductItems from "../Product/ProductItems.jsx";
import CartItems from "./CartItems.jsx";
import { useSelector } from "react-redux";
import { selectCartTotalAmount } from "./cartSlice.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  
  const cartProduct = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectCartTotalAmount);

  return (
    <div>
      <div>
        {cartProduct.map((pd) => (
          <CartItems pd={pd} />
        ))}
      </div>
      <div>
        <h1> Subtotal</h1>
        <h1>${totalPrice}</h1>
        <Link to={"/dashboard/payments"}>
          <button>Proceed to checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart;
