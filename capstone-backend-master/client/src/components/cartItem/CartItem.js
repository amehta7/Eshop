import React, { memo } from 'react'
import './CartItem.css'
import { useSelector } from 'react-redux'

const CartItem = memo(() => {
  const { order, quantity } = useSelector((state) => state.orders)

  return (
    <div className='cartdiv'>
      <div className='img-div'>
        <img src={order.imageURL} alt={order.name} />
      </div>
      <div className='detail-div'>
        <h2>{order.name} </h2>
        <p>
          Quantity : <b>{quantity}</b>
        </p>
        <p>
          Category: <b>{order.category}</b>{' '}
        </p>
        <p>
          <i>{order.description}</i>
        </p>
        <p className='price'> Total Price : $ {order.price * quantity}</p>
      </div>
    </div>
  )
})

export default CartItem
