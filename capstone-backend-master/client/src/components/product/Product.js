import React, { memo, useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import './Product.css'
import { connect } from 'react-redux'
import ProductList from '../productList/ProductList'
import {
  fetchProducts,
  fetchCategories,
  setFilter,
  clearFilter,
} from '../../store/actions/index'

const Product = memo(
  ({
    onFetchProducts,
    onFetchCategories,
    products,
    categories,
    onSetFilter,
    onClearFilter,
  }) => {
    const [cat, setCat] = useState('All')
    const [sortType, setSortType] = useState('Select...')

    useEffect(() => {
      onFetchProducts()
      onFetchCategories()
    }, [onFetchProducts, onFetchCategories])

    useEffect(() => {
      if (sortType === 'default') {
        products.sort((a, b) => a._id - b._id)
      } else if (sortType === 'desc') {
        products.sort((a, b) => a.price - b.price)
      } else if (sortType === 'asc') {
        products.sort((a, b) => b.price - a.price)
      } else if (sortType === 'newest') {
        products.sort((a, b) => b.updatedAt - a.updatedAt)
      }
    }, [products, sortType])

    const handleChange = (event, newCat) => {
      setCat(newCat)
      console.log(newCat)
    }

    return (
      <React.Fragment>
        <div className='toggle-div'>
          <ToggleButtonGroup
            color='standard'
            value={cat}
            default='All'
            exclusive
            aria-label='text alignment'
            onChange={handleChange}
          >
            <ToggleButton
              value='All'
              onClick={() => {
                onClearFilter()
              }}
            >
              All
            </ToggleButton>
            {categories &&
              categories.map((c, i) => (
                <ToggleButton
                  key={i}
                  value={c}
                  onClick={() => {
                    onSetFilter(c)
                  }}
                >
                  {c}
                </ToggleButton>
              ))}
          </ToggleButtonGroup>
        </div>

        <div className='list'>
          <div className='sort-div'>
            Sort By: <br />
            <select
              className='sel-pro-div'
              defaultValue='Select...'
              value={sortType}
              onChange={(e) => {
                setSortType(e.target.value)
              }}
              name='Select...'
            >
              <option value='default'>Default</option>
              <option value='desc'>Price: High to Low</option>
              <option value='asc'>Price: Low to High</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
          <ProductList products={products} />
        </div>
      </React.Fragment>
    )
  }
)

const filterProducts = (products, filter) =>
  filter ? products.filter((item) => item.category === filter) : products

const mapStateToProps = (state) => {
  return {
    products: filterProducts(state.products.products, state.products.filter),
    categories: state.products.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
    onFetchCategories: () => dispatch(fetchCategories()),
    onSetFilter: (category) => dispatch(setFilter(category)),
    onClearFilter: () => dispatch(clearFilter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

//export default Product
