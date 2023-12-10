// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Product.css"
function Product(id, title, price, rating, image) {
  return (
    <div className='product'>
       <div className='product__info'>
        <p>
            <small>{title}</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
           { Array(rating).fill().map(() => (
                // eslint-disable-next-line react/jsx-key
                <p>⭐</p>
            ))}
        </div> 
       </div>
       <img 
       src={image} alt="" />

       <button>Add to Basket</button>
    </div>
  )
}

export default Product