import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  " pk_test_51RabRoB0vFsStBB9i8f8SQE6j5ZVf9fg9vOXlN5BSwfpU5OyGomVP73uQTOFsGNI6Yfl5CEkjAqOTxEDNATE0LXJ00uSiXTwRB "
);

const Payment = () => {
  return (
    <div>
      <h1>PLS PAY</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
