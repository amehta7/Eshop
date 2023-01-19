import React, { memo, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './ModifyProduct.css'
import { connect } from 'react-redux'
import { updateProduct, getProById } from '../../store/actions/index'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const ModifyProduct = memo(({ onUpdateProduct, error }) => {
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
  const [data, setData] = useState({})

  useEffect(() => {
    getProById(id).then((proData) => {
      console.log(proData)
      setData(proData)
    })
  }, [id])

  useEffect(() => {
    setName(data.name)
    setCat(data.category)
    setManu(data.manufacturer)
    setItem(data.availableItems)
    setPrice(data.price)
    setUrl(data.imageURL)
    setDesc(data.description)
  }, [data])

  const handleModProduct = () => {
    return (
      <React.Fragment>
        {setSubmitted(true)}
        {!error &&
        name &&
        cat &&
        manu &&
        price &&
        item &&
        url &&
        desc &&
        price > 0 &&
        item >= 0
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
              value={item || ''}
              onChange={(e) => setItem(e.target.value)}
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: { min: 0 } }}
            />
            {submitted && !item && (
              <div style={{ color: 'red' }}>Available Items is required</div>
            )}
            {submitted && item < 0 && (
              <div style={{ color: 'red' }}>
                Available Items should be equal or more than zero
              </div>
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
              value={price || ''}
              onChange={(e) => setPrice(e.target.value)}
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: { min: 0 } }}
            />
            {submitted && !price && (
              <div style={{ color: 'red' }}>Price is required</div>
            )}
            {submitted && price <= 0 && (
              <div style={{ color: 'red' }}>Price should be more than zero</div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              id='url'
              label='Image URL'
              name='url'
              autoComplete='image url'
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
              required
              id='desc'
              label='Product Description'
              name='desc'
              autoComplete='product description'
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
})

const mapStateToProps = (state) => {
  return {
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
