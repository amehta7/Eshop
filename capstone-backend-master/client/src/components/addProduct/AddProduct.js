import React, { memo, useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreatableSelect from 'react-select/creatable'
import './AddProduct.css'
import { connect } from 'react-redux'
import { addProduct } from '../../store/actions/index'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const defaultOptions = [
  createOption('Apparel'),
  createOption('Electronics'),
  createOption('Personal Care'),
]

const AddProduct = memo(({ onAddProduct, error, products }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [availableItems, setAvailableItems] = useState('')
  const [price, setPrice] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [submitted, setSubmitted] = useState(false)

  const handleCreate = (inputValue) => {
    setIsLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      setIsLoading(false)
      setOptions((prev) => [...prev, newOption])
      setCategory(newOption)
    }, 1000)
  }

  const handleAddProduct = () => {
    return (
      <React.Fragment>
        {!error &&
        name &&
        category &&
        manufacturer &&
        price &&
        availableItems &&
        imageURL &&
        description
          ? (onAddProduct(
              name,
              category.label,
              manufacturer,
              price,
              availableItems,
              imageURL,
              description
            ),
            toast.success(`Product ${name} added successfully`, {
              position: toast.POSITION.TOP_RIGHT,
            }),
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
            Add Product
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {submitted && !name && (
              <div style={{ color: 'red' }}>Name is required</div>
            )}
            <CreatableSelect
              isClearable
              isDisabled={isLoading}
              isLoading={isLoading}
              onChange={(newValue) => setCategory(newValue)}
              onCreateOption={handleCreate}
              options={options}
              value={category}
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            />
            {submitted && !category && (
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
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
            {submitted && !manufacturer && (
              <div style={{ color: 'red' }}>Manufacturer is required</div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              id='item'
              label='Available Items'
              name='item'
              autoComplete='Available Items'
              autoFocus
              value={availableItems}
              onChange={(e) => setAvailableItems(e.target.value)}
            />
            {submitted && !availableItems && (
              <div style={{ color: 'red' }}>Available Items is required</div>
            )}
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
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            {submitted && !imageURL && (
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {submitted && !description && (
              <div style={{ color: 'red' }}>Description is required</div>
            )}
            <Button
              className='btn'
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#3f51b5' }}
              onClick={handleAddProduct}
              href={
                !error &&
                name &&
                category &&
                manufacturer &&
                price &&
                availableItems &&
                imageURL &&
                description &&
                submitted
                  ? '/products'
                  : '#'
              }
            >
              Save Product
            </Button>
            <ToastContainer />
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
    onAddProduct: (
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description
    ) =>
      dispatch(
        addProduct(
          name,
          category,
          manufacturer,
          price,
          availableItems,
          imageURL,
          description
        )
      ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
