import React, { memo, useState, useEffect } from 'react'
import Select from 'react-select'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './Address.css'
import { connect } from 'react-redux'
import { addAddress, getAddress, addToAddress } from '../../store/actions/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Address = memo(
  ({ onAddAddress, address, error, onGetAddress, onAddToAddress }) => {
    const [name, setName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [landmark, setLandmark] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    useEffect(() => {
      onGetAddress()
    }, [])

    const options = address.map((item, index) => {
      return {
        label: item.name + ' ...>' + item.street + ' , ' + item.city,
        value: item._id,
      }
    })

    const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption)
      console.log(selectedOption)
      onAddToAddress(selectedOption)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setName('')
      setContactNumber('')
      setStreet('')
      setCity('')
      setState('')
      setLandmark('')
      setZipCode('')
    }

    return (
      <div className='address-div'>
        <div>
          <div className='sel-div'>
            Select Address:
            <Select
              searchable={true}
              options={options}
              onChange={handleSelectChange}
              value={selectedOption}
              name='addressSelect'
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            />
          </div>

          <div className='or-div'>-OR-</div>
          <div className='add-div'>
            <Container component='main' maxWidth='xs'>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component='h1' variant='h5'>
                  Add Address
                </Typography>
                <Box
                  component='form'
                  noValidate
                  sx={{ mt: 1 }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    name='name'
                    autoComplete='name'
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {submitted && !name && (
                    <div style={{ color: 'red' }}>Name is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='cnumber'
                    label='Contact Number'
                    name='cnumber'
                    autoComplete='number'
                    autoFocus
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                  {submitted && !contactNumber && (
                    <div style={{ color: 'red' }}>
                      Contact Number is required
                    </div>
                  )}
                  {submitted && contactNumber.length < 10 && (
                    <div style={{ color: 'red' }}>
                      Contact Number length must be at least 10 characters long
                    </div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='street'
                    label='Street'
                    name='street'
                    autoComplete='street'
                    autoFocus
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                  {submitted && !street && (
                    <div style={{ color: 'red' }}>Street is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='city'
                    label='City'
                    name='city'
                    autoComplete='city'
                    autoFocus
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {submitted && !city && (
                    <div style={{ color: 'red' }}>City is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='state'
                    label='State'
                    name='state'
                    autoComplete='state'
                    autoFocus
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  {submitted && !state && (
                    <div style={{ color: 'red' }}>State is required</div>
                  )}
                  <TextField
                    margin='normal'
                    fullWidth
                    id='landmark'
                    label='Landmark'
                    name='landmark'
                    autoComplete='landmark'
                    autoFocus
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='zcode'
                    label='Zip Code'
                    name='zcode'
                    autoComplete='Zip Code'
                    autoFocus
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  {submitted && !zipCode && (
                    <div style={{ color: 'red' }}>Zip Code is required</div>
                  )}
                  {submitted && zipCode.length < 6 && (
                    <div style={{ color: 'red' }}>
                      Zip Code must be at least 6 characters long
                    </div>
                  )}
                  <Button
                    className='btn'
                    type='button'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: '#3f51b5' }}
                    onClick={() => {
                      return (
                        <React.Fragment>
                          {setSubmitted(true)}
                          {!error &&
                            name &&
                            contactNumber &&
                            street &&
                            city &&
                            state &&
                            zipCode &&
                            onAddAddress(
                              name,
                              contactNumber,
                              street,
                              city,
                              state,
                              landmark,
                              zipCode
                            )}

                          {!error ? setSubmitted(true) : null}
                        </React.Fragment>
                      )
                    }}
                  >
                    Save Address
                  </Button>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    )
  }
)

const mapStateToProps = (state) => {
  return {
    address: state.addresses.address,
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAddress: (
      name,
      contactNumber,
      street,
      city,
      state,
      landmark,
      zipCode
    ) =>
      dispatch(
        addAddress(name, contactNumber, street, city, state, landmark, zipCode)
      ),
    onGetAddress: () => dispatch(getAddress()),
    onAddToAddress: (address) => dispatch(addToAddress(address)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)
