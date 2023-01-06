import React, { memo, useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import './Product.css'
import { connect } from 'react-redux'
import ProductList from '../productList/ProductList'
import Select from 'react-select'
import {
  fetchProducts,
  fetchCategories,
  setFilter,
  clearFilter,
  fetchProductsBySort,
} from '../../store/actions/index'

const options = [
  { value: 'default', label: 'Default' },
  { value: 'desc', label: 'Price: High to Low' },
  { value: 'asc', label: 'Price: Low to High' },
  { value: 'newest', label: 'Newest' },
]

const Product = memo(
  ({
    onFetchProducts,
    onFetchCategories,
    products,
    categories,
    onSetFilter,
    onClearFilter,
    onFetchProductsBySort,
  }) => {
    const [cat, setCat] = useState('All')
    const [sortType, setSortType] = useState('')

    useEffect(() => {
      onFetchProducts()
      onFetchCategories()
    }, [onFetchProducts, onFetchCategories])

    const handleSelectChange = (selectedOption) => {
      setSortType(selectedOption)
      if (selectedOption.value === 'default') {
        onFetchProductsBySort('_id', 'desc')
      } else if (selectedOption.value === 'desc') {
        onFetchProductsBySort('price', 'desc')
      } else if (selectedOption.value === 'asc') {
        onFetchProductsBySort('price', 'asc')
      } else if (selectedOption.value === 'newest') {
        onFetchProductsBySort('updatedAt', 'desc')
      } else {
        onFetchProducts()
      }
    }

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
            <Select
              value={sortType}
              options={options}
              onChange={handleSelectChange}
              searchable={false}
            />
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
    onFetchProductsBySort: (sortBy, direction) =>
      dispatch(fetchProductsBySort(sortBy, direction)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
