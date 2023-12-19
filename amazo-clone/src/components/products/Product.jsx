
import React from 'react'
import './Product.css'
import { useStateValue } from '../providers/StateProvider';

function Product({id, title, price, rating, image}) {

  const [{ basket }, dispatch] = useStateValue();

  const addBasket = () => {
    dispatch(
      {
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        },
      });
  };
// console.log("check")
  return (
    <div className='product'>
      <div className='product__info'>
        <p>
          <small>{title}</small>
          <strong>{price}</strong>
        </p>
        
        <div className='product__rating'>
          {Array(rating).fill().map((_, index) => (
            <p key={index}>⭐</p>
          ))}
{/* 
          {Array(rating).fill().map(() => (
            // eslint-disable-next-line react/jsx-key
            <p>⭐</p>
          ))} */}

        </div>
      </div>

      <img
        src={image} alt="no" />

      <button onClick={addBasket}>Add to Basket</button>
    </div>
  )
}

export default Product