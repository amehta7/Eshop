import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './ModifyProduct.css'

const ModifyProduct = () => {
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [manu, setManu] = useState('')
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hi')
  }

  const handleModProduct = () => {
    toast.success(`Product {name} modified successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <div className='pro-div'>
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
            Modify Product
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
              id='category'
              label='Category'
              name='category'
              autoComplete='category'
              autoFocus
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='manufacturer '
              label='Manufacturer'
              name='manufacturer'
              autoComplete='manufacturer'
              autoFocus
              value={manu}
              onChange={(e) => setManu(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='item'
              label='Available Items'
              name='item'
              autoComplete='Available Items'
              autoFocus
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='price'
              label='Price'
              name='price'
              autoComplete='price'
              autoFocus
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='url'
              label='Image URL'
              name='url'
              autoComplete='image url'
              autoFocus
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <TextField
              margin='normal'
              fullWidth
              id='desc'
              label='Product Description'
              name='desc'
              autoComplete='product description'
              autoFocus
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <Button
              className='btn'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#3f51b5' }}
              onClick={handleModProduct}
            >
              Modify Product
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ModifyProduct
