import React, { useEffect, useState } from 'react'
import './Payment.css'

import CheckoutProduct from '../components/checkOut/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../components/providers/StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import numeral from 'numeral';
import axios from './axios';
import { db } from '../firebase';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();
    const getBasketTotal = (basket) =>
      basket?.reduce((amount, item) => item.price + amount, 0);


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);

    
        const [clientSecret, setClientSecret] = useState(true);
        useEffect(() => {
            const getClientSecret = async () => {
                const response = await axios( {
                    method: 'POST',
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret);
                // console.log(response.data.clientSecret);
            };
            getClientSecret();
        }, [basket]);
    
console.log(clientSecret);
    const handleSubmit =  async(e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>  {

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            });


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            });

            navigate('/orders');
    });
}
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    const orderTotal = numeral(getBasketTotal(basket)).format('$0,0.00');

  return (
    <div className='payment'>
        <div className='payment__container'>

            <h1>
                Checkout (
                    <Link to="/checkout">{basket.length} items</Link>
                )
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                       <CheckoutProduct
                       key = {item.id}
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                    ))}

                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>

                    <form onSubmit={handleSubmit}>
                        <CardElement  onChange={handleChange}/>
                        <div className='payment__priceContainer'>

                           <h3>Order Total: {orderTotal}</h3>

                           <button disabled={processing || disabled || succeeded}> 
                           
                           <span>{processing ? <p>Procesing</p> : 'Buy Now'}</span>
                           </button>
                        </div>
                        {error && <div className='payment__error'>{error}</div>}
                        
                    </form>

            </div>
          
    

        </div>
    </div>
    </div>
  )
}

export default Payment