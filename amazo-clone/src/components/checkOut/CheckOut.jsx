// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./CheckOut.css"
import Subtotal from './Subtotal'
function CheckOut() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>

            <img className='checkout__ad'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

            <h3>hello, </h3>
            <h2 className='checkout__title'>your shopping basket</h2>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  )
}

export default CheckOut