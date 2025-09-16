import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { selectCartTotalAmount } from "../Cart/cartSlice.jsx";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  console.log("User from context:", user);
  const totalPrice = useSelector(selectCartTotalAmount);
  console.log("Total Price:", totalPrice);
  const [clientSecret, setClientSecret] = useState("");
  console.log("Client Secret state:", clientSecret);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (totalPrice > 0) {
      const fetchData = async () => {
        try {
          const res = await axios.post(
            "https://ecommerceserver-mocha.vercel.app/create-payment-intent",
            { totalPrice }
          );
          const clientSecret = res.data.clientSecret;
          console.log("Client Secret fetch:", clientSecret);
          setClientSecret(res.data.clientSecret);
          // setClientSecret(clientSecret.id);
        } catch (e) {
          console.log("Error fetching payment intent:", e);
        }
      };
      fetchData();
    }
  }, [axios, totalPrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        phone: formData.phone,

        address: { line1: formData.address },
      },
    });

    if (error) {
      console.log("[Payment Error]", error);
      return;
    }

    console.log("[PaymentMethod]", paymentMethod);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("[Confirm Error]", confirmError);
      setCardError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        // console.log("[PaymentIntent]", paymentIntent);
        setSuccess("✅ Payment successful!");
        // Optional: save payment info to database
        // const payment = {
        //   email: user.email,
        //   name: user.displayName,
        //   // userImage: user.image,
        //   address: formData.address,
        //   //  category: cart.category,
        //   phone: formData.phone,
        //   price: totalPrice,
        //   // date: new Date(),
        //   transactionId: paymentIntent.id
        //   //  cardIds: cart.map((item) => item._id),
        //   // productIds: cart.map((item) => item.productId),
        // };
        //  const res = axiosSecure.post("/payments", payment);
        // refetch();
      }
    }

    // setProcessing(false);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Complete Your Payment</h2>

        <input
          type="text"
          name="address"
          placeholder="Billing Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <div className="p-3 border rounded">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <button
          type="submit"
          //disabled={!stripe || !clientSecret || processing}
          //className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Pay
        </button>
        {/* <button onClick={fetchData}>fetchsecret</button> */}

        {cardError && (
          <p className="text-red-500 text-sm text-center">{cardError}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center">{success}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
