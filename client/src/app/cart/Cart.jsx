import { AuthContext } from "../../hooks/AuthProvider.jsx";
import { useContext } from "react";
import CartItems from "../../features/Cart/CartItems.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { items } = useSelector((state) => state?.cart);

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * Number(item.quantity),
    0
  );

  return (
    <div class=" flex flex-col items-center mx-auto sm:px-4 px-4 py-10 ">
      <div>
        {items.map((pd) => (
          <CartItems pd={pd} />
        ))}
      </div>
      <div class="flex gap-2 p-2">
        <h1> Subtotal:</h1>
        <h1>${totalAmount}</h1>
      </div>

      {user ? (
        <Link to={"/payment"}>
          <button class="bg-black text-white p-2">Proceed to checkout</button>
        </Link>
      ) : (
        <Link to={"/signin"}>
          <button class="bg-black text-white p-2">Login to Purchase</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
