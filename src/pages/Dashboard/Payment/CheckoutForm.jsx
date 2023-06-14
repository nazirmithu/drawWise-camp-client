import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, serTransactionId] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement)
        if (card === null) {
            return
        }

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent);

        if (paymentIntent.status === 'succeeded') {
            serTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                price,
                date: new Date(),
                transactionId: paymentIntent.id,
                classId: cart.map(item => item.classId),
                cartItems: cart.map(item => item._id),
                class_name: cart.map(item => item.class_name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        // dsfds
                    }
                })
        }

    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-success mt-4 btn-sm" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 ml-8">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;