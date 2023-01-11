import React, { memo, useEffect, useState } from 'react'
import './ConfirmOrder.css'
import { connect } from 'react-redux'
import { confirmOrder } from '../../store/actions/index'

const ConfirmOrder = memo(
  ({ orders, quantity, selectedAddress, onConfirmOrder, address }) => {
    const [addData, setAddData] = useState([])

    useEffect(() => {
      const add = address.filter((a) => a._id === selectedAddress.value)
      console.log('add :', add)
      setAddData(add)
    }, [])
    return (
      <div className='order-div'>
        <div className='first-div'>
          <h2>{orders.name} </h2>
          <p>
            Quantity : <b>{quantity}</b>
          </p>
          <p>
            Category: <b>{orders.category}</b>{' '}
          </p>
          <p>
            <i>{orders.description}</i>
          </p>
          <p className='price'> Total Price : $ {orders.price * quantity}</p>
        </div>
        <div className='sec-div'>
          {addData &&
            addData.map((a, i) => {
              return (
                <React.Fragment key={i}>
                  <p className='title'>Address Details : </p>
                  <p>{a.name}</p>
                  <p>Contact Number: {a.contactNumber}</p>
                  <p>
                    {a.street} {a.city}
                  </p>
                  <p>{a.state}</p>
                  <p>{a.zipCode}</p>
                </React.Fragment>
              )
            })}
        </div>
      </div>
    )
  }
)

const mapStateToProps = (state) => {
  return {
    orders: state.orders.order,
    quantity: state.orders.quantity,
    selectedAddress: state.addresses.selectedAddress,
    address: state.addresses.address,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onConfirmOrder: (product, address, quantity) =>
      dispatch(confirmOrder(product, address, quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder)
