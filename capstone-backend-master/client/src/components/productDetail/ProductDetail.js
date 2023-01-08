import React, { memo, useEffect, useState } from 'react'
import './ProductDetail.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { fetchProductById } from '../../store/actions/index'
import { useParams } from 'react-router-dom'

const ProductDetail = memo(({ products, onFetchProductById }) => {
  const [qty, setQty] = useState('1')
  const [orderbtnClick, setOrderbtnClick] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    onFetchProductById(id)
    console.log(id)
  }, [id, onFetchProductById])

  return (
    <React.Fragment>
      <div className='product-details'>
        <div className='namediv'>
          <h2>{products.name}</h2>
          <p>Available Quantity : {products.availableItems}</p>
        </div>
        <h3>
          Category: <b>{products.category}</b>{' '}
        </h3>
        <p>
          <i>{products.description}</i>
        </p>
        <p className='price'>$ {products.price}</p>
        <img src={products.imageURL} alt={products.name} />
        <div className='details'>
          <TextField
            margin='normal'
            required
            fullWidth
            defaultValue='1'
            id='quantity'
            label='Enter Quantity'
            name='quantity'
            autoComplete='quantity'
            style={{ width: '300px', height: '0px' }}
            onChange={(e) => setQty(e.target.value)}
          />

          {!qty && (
            <div className='err-div'>Please fill the Quantity Field</div>
          )}
          <br />
          <Button
            size='small'
            variant='contained'
            style={{
              backgroundColor: '#3f51b5',
              top: '70px',
              width: '150px',
            }}
            onClick={() => {
              qty !== '' ? setOrderbtnClick(true) : setOrderbtnClick(false)
            }}
            href={orderbtnClick ? '/createorder' : '#'}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductById: (id) => dispatch(fetchProductById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
