//import { useSelector } from "react-redux";
//import { useState } from "react";
//import { selectCartTotalAmount } from "../Product/cartSlice.jsx";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart} from "./cartSlice.jsx";
//import { Link } from "react-router-dom";
import "./CartItems.css";

const CartItems = ({ pd }) => {
  // const cartProduct = useSelector((state) => state.cart.items);
  // const totalPrice = useSelector(selectCartTotalAmount);
  // console.log(totalPrice);
  const dispatch = useDispatch();
  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1 && quantity <= 20) {
      dispatch(updateQuantity({ productID: id, quantity: quantity }));
    }
  };
  return (
    <div className="cart-con">
      {/* {pd.length == 0 ? (
        <>
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        </>
      ) : ( */}

      {/* cartProduct.map((pd) => (   */}

      <div className="cart-cards">
        <div className="cart-card-row" id={pd.id}>
          <div className="cart-card-img">
            <img
              src={pd.imgSrc}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="cart-card-body ">
            <h5 className="card-title">{pd.title}</h5>
            <p className="card-text">{pd.description}</p>
            <button className="card-btn">{pd.price} ₹</button>
            <button
              className="btn"
              onClick={() => handleQuantityChange(pd.id, pd.quantity - 1)}
            >
              -
            </button>

            <input type="text" min="1" max="20" value={pd.quantity} readonly />
            <button
              className="btn"
              onClick={() => handleQuantityChange(pd.id, pd.quantity + 1)}
            >
              +
            </button>

            <button
              className="btn"
              onClick={() => dispatch(removeFromCart(pd.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
