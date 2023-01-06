import React, { useEffect, useState, memo } from 'react'
import './NavBar.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductsByName, fetchProducts } from '../../store/actions/index'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const NavBar = memo(({ onFetchProductsByName, products, onFetchProducts }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    query ? onFetchProductsByName(query) : onFetchProducts()
  }, [query, onFetchProductsByName, onFetchProducts])

  return (
    <AppBar position='fixed' style={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <div>
          <ShoppingCartIcon style={{ fontSize: 29 }} />
        </div>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
          style={{ margin: '10px' }}
        >
          upGrad E-Shop
        </Typography>
        <div className='search'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className='nav-list1'>
          <Button
            href='/'
            color='inherit'
            style={{
              textTransform: 'none',
              color: '#fff',
              textDecoration: 'underline solid white',
            }}
          >
            Home
          </Button>

          <Link to='/addProduct'>
            <Button
              color='inherit'
              style={{
                textTransform: 'none',
                color: '#fff',
                textDecoration: 'underline solid white',
              }}
            >
              Add Product
            </Button>
          </Link>
          <Link to='/login'>
            <Button
              color='inherit'
              style={{
                textTransform: 'none',
                color: '#fff',
                textDecoration: 'underline solid white',
              }}
            >
              Login
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              color='inherit'
              style={{
                textTransform: 'none',
                color: '#fff',
                textDecoration: 'underline solid white',
              }}
            >
              Sign Up
            </Button>
          </Link>

          <Button
            href='/'
            style={{
              color: 'white',
              backgroundColor: '#e50c6b',
              textDecoration: 'none',
            }}
          >
            LOGOUT
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
})

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductsByName: (query) => dispatch(fetchProductsByName(query)),
    onFetchProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
