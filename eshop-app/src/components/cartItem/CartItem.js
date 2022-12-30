import React from 'react'
import './CartItem.css'

const CartItem = () => {
  return (
    <div className='cartdiv'>
      <h2>Name </h2>
      <p>
        Quantity : <b>1</b>
      </p>
      <p>
        Category: <b>Electronics</b>{' '}
      </p>
      <p>
        <i>this is another desc</i>
      </p>
      <p className='price'> Total Price : $ 1000</p>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaYmmrvorlDtfO54XH9ZjZRTN6twggjxr0A&usqp=CAU'
        alt='PhoneImage'
      />
    </div>
  )
}

export default CartItem
