
import React from 'react'
import './Subtotal.css'
import numeral from 'numeral';
import { useStateValue } from '../providers/StateProvider';
import {Link, useNavigate} from 'react-router-dom';
function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const formattedSubtotal = numeral(getBasketTotal(basket)).format('$0,0.00');
  return (
    <div className='subtotal'>
      <p>
        Subtotal ({basket.length} items): <strong>{formattedSubtotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => navigate('/payment') }>Proceed to Checkout</button>
    </div>
  )
}
export default Subtotal