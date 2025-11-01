import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { AuthContext } from "../../Hooks/AuthProvider.jsx";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  const { totalAmount } = useSelector((state) => state?.cart);

  useEffect(() => {
    if (totalAmount > 0) {
      const fetchData = async () => {
        try {
          const res = await axios.post(
            "https://gizmo-taupe.vercel.app/create-payment-intent",
            { totalAmount }
          );
          const clientSecret = res.data.clientSecret;
          console.log("Client Secret fetch:", clientSecret);
          setClientSecret(res.data.clientSecret);
        } catch (e) {
          console.log("Error fetching payment intent:", e);
        }
      };
      fetchData();
    }
  }, [axios, totalAmount]);

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
      await stripe.couser?.displayNamenfirmCardPayment(clientSecret, {
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
        setSuccess("✅ Payment successful!");
      }
    }
  };

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

        <button type="submit">Pay</button>

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
