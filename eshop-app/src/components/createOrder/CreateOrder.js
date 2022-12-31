import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import ConfirmOrder from '../confirmOrder/ConfirmOrder'
import Address from '../address/Address'
import CartItem from '../cartItem/CartItem'
import './CreateOrder.css'

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

const CreateOrder = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
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
            <div className='not-div'>
              Order placed successfully! <span className='cancel-sign'>X</span>
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
                    <Button
                      size='small'
                      variant='contained'
                      style={{
                        backgroundColor: '#3f51b5',

                        width: '150px',
                      }}
                    >
                      PLACE ORDER
                    </Button>
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

export default CreateOrder

// <div className='bottom-btn-div'>
//               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                 <Button
//                   color='inherit'
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   sx={{ mr: 1 }}
//                 >
//                   Back
//                 </Button>
//                 <Box sx={{ flex: '1 1 auto' }} />

//                 <Button onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? (
//                     <Button
//                       size='small'
//                       variant='contained'
//                       href='/'
//                       style={{
//                         backgroundColor: '#3f51b5',

//                         width: '150px',
//                       }}
//                     >
//                       PLACE ORDER
//                     </Button>
//                   ) : (
//                     'Next'
//                   )}
//                 </Button>
//               </Box>
//             </div>
