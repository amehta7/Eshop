import React, { memo, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './ModifyProduct.css'
import { connect } from 'react-redux'
import { updateProduct, fetchProductById } from '../../store/actions/index'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const ModifyProduct = memo(
  ({ onUpdateProduct, error, products, onFetchProductById }) => {
    const navigate = useNavigate()
    let { id } = useParams()

    const [name, setName] = useState('')
    const [cat, setCat] = useState('')
    const [manu, setManu] = useState('')
    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [desc, setDesc] = useState('')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
      onFetchProductById(id)
    }, [id])

    useEffect(() => {
      setName(products.name)
      setCat(products.category)
      setManu(products.manufacturer)
      setItem(products.availableItems)
      setPrice(products.price)
      setUrl(products.imageURL)
      setDesc(products.description)
    }, [products])

    const handleModProduct = () => {
      return (
        <React.Fragment>
          {setSubmitted(true)}
          {!error && name && cat && manu && price && item && url && desc
            ? (onUpdateProduct(
                id,
                name,
                cat,
                manu,
                price,
                item,
                url,
                desc,
                navigate
              ),
              toast.success(`Product ${name} modified successfully`, {
                position: toast.POSITION.TOP_RIGHT,
              }),
              setName(''),
              setCat(''),
              setManu(''),
              setItem(''),
              setPrice(''),
              setUrl(''),
              setDesc(''),
              setSubmitted(false))
            : null}
        </React.Fragment>
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

            <Box component='form' noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />

              {submitted && !name && (
                <div style={{ color: 'red' }}>Name is required</div>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                id='category'
                label='Category'
                name='category'
                autoComplete='category'
                autoFocus
                value={cat || ''}
                onChange={(e) => setCat(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              {submitted && !cat && (
                <div style={{ color: 'red' }}>Category is required</div>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                id='manufacturer '
                label='Manufacturer'
                name='manufacturer'
                autoComplete='manufacturer'
                autoFocus
                value={manu || ''}
                onChange={(e) => setManu(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              {submitted && !manu && (
                <div style={{ color: 'red' }}>Manufacturer is required</div>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                type='number'
                id='item'
                label='Available Items'
                name='item'
                autoComplete='Available Items'
                autoFocus
                value={item || ''}
                onChange={(e) => setItem(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { min: 0 } }}
              />
              {submitted && !item && (
                <div style={{ color: 'red' }}>Available Items is required</div>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                type='number'
                id='price'
                label='Price'
                name='price'
                autoComplete='price'
                autoFocus
                value={price || ''}
                onChange={(e) => setPrice(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { min: 0 } }}
              />
              {submitted && !price && (
                <div style={{ color: 'red' }}>Price is required</div>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                id='url'
                label='Image URL'
                name='url'
                autoComplete='image url'
                autoFocus
                value={url || ''}
                onChange={(e) => setUrl(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              {submitted && !url && (
                <div style={{ color: 'red' }}>Image URL is required</div>
              )}
              <TextField
                margin='normal'
                fullWidth
                id='desc'
                label='Product Description'
                name='desc'
                autoComplete='product description'
                autoFocus
                value={desc || ''}
                onChange={(e) => setDesc(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              {submitted && !desc && (
                <div style={{ color: 'red' }}>Description is required</div>
              )}
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
  }
)

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
    onFetchProductById: (id) => dispatch(fetchProductById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct)
