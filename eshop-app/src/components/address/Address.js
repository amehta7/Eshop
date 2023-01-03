import React, { useState } from 'react'
import Select from 'react-select'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './Address.css'

const Address = () => {
  const [name, setName] = useState('')
  const [cnumber, setCnumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [landmark, setLandmark] = useState('')
  const [zcode, setZcode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hi')
  }

  return (
    <div className='address-div'>
      <div>
        <div className='sel-div'>
          Select Address:
          <Select defaultValue='Select...' />
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
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
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

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='cnumber'
                  label='Contact Number'
                  name='cnumber'
                  autoComplete='number'
                  autoFocus
                  value={cnumber}
                  onChange={(e) => setCnumber(e.target.value)}
                />
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
                  value={zcode}
                  onChange={(e) => setZcode(e.target.value)}
                />
                <Button
                  className='btn'
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: '#3f51b5' }}
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

export default Address
