import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../components/hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useSelectedClass();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-full">
            <h2 className="3xl">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}  price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;