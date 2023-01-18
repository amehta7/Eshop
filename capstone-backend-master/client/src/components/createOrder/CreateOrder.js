import React, { memo, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ConfirmOrder from '../confirmOrder/ConfirmOrder'
import Address from '../address/Address'
import CartItem from '../cartItem/CartItem'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import './CreateOrder.css'
import { connect } from 'react-redux'
import { confirmOrder } from '../../store/actions/index'

const steps = ['Items', 'Select Address', 'Confirm Order']

const RenderStep = (step) => {
  switch (step) {
    case 0:
      return <CartItem />
    case 1:
      return <Address />
    case 2:
      return <ConfirmOrder />
    default:
      return <div>Not Found</div>
  }
}

const CreateOrder = memo(
  ({ orders, quantity, selectedAddress, onConfirmOrder }) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      console.log(activeStep)
      if (activeStep === 1 && !selectedAddress.value) {
        console.log('first step')
        toast.error(`Please select address!`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        setActiveStep(1)
      }
    }

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
      <div className='stepdiv'>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <div className='success-msg-div'>
                <Typography variant='h5' gutterBottom>
                  Your order is confirmed!!!
                </Typography>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {RenderStep(activeStep)}
              <div className='bottom-btn-div'>
                <div className='btn-1-div'>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
                <div className='btn-2-div'>
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? (
                      <div>
                        <Button
                          size='small'
                          variant='contained'
                          style={{
                            backgroundColor: '#3f51b5',
                            width: '150px',
                          }}
                          onClick={() => {
                            return (
                              toast.success('Order placed successfully!', {
                                position: toast.POSITION.TOP_RIGHT,
                              }),
                              onConfirmOrder(
                                orders._id,
                                selectedAddress.value,
                                quantity
                              )
                            )
                          }}
                        >
                          PLACE ORDER
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size='small'
                        variant='contained'
                        style={{
                          backgroundColor: '#3f51b5',
                          width: '30px',
                        }}
                      >
                        NEXT
                      </Button>
                    )}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    )
  }
)

const mapStateToProps = (state) => {
  return {
    orders: state.orders.order,
    quantity: state.orders.quantity,
    selectedAddress: state.addresses.selectedAddress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onConfirmOrder: (product, address, quantity) =>
      dispatch(confirmOrder(product, address, quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
