import React from 'react'
import './ProductDetail.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const ProductDetail = () => {
  return (
    <div className='product-details'>
      <div className='namediv'>
        <h2>Name </h2>
        <p>Available Quantity : 10</p>
      </div>
      <h3>
        Category: <b>Electronics</b>{' '}
      </h3>
      <p>
        <i>this is another desc</i>
      </p>
      <p className='price'>$ 1000</p>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaYmmrvorlDtfO54XH9ZjZRTN6twggjxr0A&usqp=CAU'
        alt='PhoneImage'
      />
      <div className='details'>
        <TextField
          margin='normal'
          required
          fullWidth
          id='quantity'
          label='Enter Quantity'
          name='quantity'
          autoComplete='quantity'
          style={{ width: '300px', height: '0px' }}
        />
        <br />
        <Button
          size='small'
          variant='contained'
          href='/createorder'
          style={{ backgroundColor: '#3f51b5', top: '70px', width: '150px' }}
        >
          PLACE ORDER
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail
