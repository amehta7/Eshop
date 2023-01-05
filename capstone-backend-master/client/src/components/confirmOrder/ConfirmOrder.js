import React from 'react'
import './ConfirmOrder.css'

const ConfirmOrder = () => {
  return (
    <div className='order-div'>
      <div className='first-div'>
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
      </div>
      <div className='sec-div'>
        <p className='title'>Address Details : </p>
        <p>Lucknow Home</p>
        <p>Contact Number: 9876543213</p>
        <p>Police line, Lucknow</p>
        <p>Gujarat</p>
        <p>34567</p>
      </div>
    </div>
  )
}

export default ConfirmOrder
