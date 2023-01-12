import React, { memo, useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './ModifyProduct.css'
import { connect } from 'react-redux'
import { updateProduct } from '../../store/actions/index'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ModifyProduct = memo(({ onUpdateProduct, error, products }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [manu, setManu] = useState('')
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')

  let { id } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hi')
  }

  const handleModProduct = () => {
    return onUpdateProduct(
      id,
      name,
      cat,
      manu,
      price,
      item,
      url,
      desc,
      navigate
    )
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
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#3f51b5' }}
              onClick={handleModProduct}
            >
              Modify Product
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    error: state.errors.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateProduct: (
      id,
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description,
      navigate
    ) =>
      dispatch(
        updateProduct(
          id,
          name,
          category,
          manufacturer,
          price,
          availableItems,
          imageURL,
          description,
          navigate
        )
      ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct)
