import React, { memo, useState, useEffect } from 'react'
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
  let { id } = useParams()

  const [name, setName] = useState()
  const [cat, setCat] = useState()
  const [manu, setManu] = useState()
  const [item, setItem] = useState()
  const [price, setPrice] = useState()
  const [url, setUrl] = useState()
  const [desc, setDesc] = useState()
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const product = products.filter((p) => p._id === id)
    console.log(product)
    setData(product)
  }, [id, products])

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
            setSubmitted(true))
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
          {data &&
            data.map((d, i) => {
              return (
                <Box component='form' noValidate sx={{ mt: 1 }} key={i}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    defaultValue={d.name}
                    id='name'
                    label='Name'
                    name='name'
                    autoComplete='name'
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  {submitted && !name && (
                    <div style={{ color: 'red' }}>Name is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    defaultValue={d.category}
                    id='category'
                    label='Category'
                    name='category'
                    autoComplete='category'
                    autoFocus
                    onChange={(e) => setCat(e.target.value)}
                  />
                  {submitted && !cat && (
                    <div style={{ color: 'red' }}>Category is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    defaultValue={d.manufacturer}
                    id='manufacturer '
                    label='Manufacturer'
                    name='manufacturer'
                    autoComplete='manufacturer'
                    autoFocus
                    onChange={(e) => setManu(e.target.value)}
                  />
                  {submitted && !manu && (
                    <div style={{ color: 'red' }}>Manufacturer is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    type='number'
                    defaultValue={d.availableItems}
                    id='item'
                    label='Available Items'
                    name='item'
                    autoComplete='Available Items'
                    autoFocus
                    onChange={(e) => setItem(e.target.value)}
                  />
                  {submitted && !item && (
                    <div style={{ color: 'red' }}>
                      Available Items is required
                    </div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    type='number'
                    defaultValue={d.price}
                    id='price'
                    label='Price'
                    name='price'
                    autoComplete='price'
                    autoFocus
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {submitted && !price && (
                    <div style={{ color: 'red' }}>Price is required</div>
                  )}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    defaultValue={d.imageURL}
                    id='url'
                    label='Image URL'
                    name='url'
                    autoComplete='image url'
                    autoFocus
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  {submitted && !url && (
                    <div style={{ color: 'red' }}>Image URL is required</div>
                  )}
                  <TextField
                    margin='normal'
                    fullWidth
                    defaultValue={d.description}
                    id='desc'
                    label='Product Description'
                    name='desc'
                    autoComplete='product description'
                    autoFocus
                    onChange={(e) => setDesc(e.target.value)}
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
              )
            })}
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
