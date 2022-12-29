import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import './Product.css'

import ProductList from '../productList/ProductList'

let temp = ['All', 'Apparel', 'Electronics', 'Personal Care']

const Product = () => {
  const [cat, setCat] = useState('All')
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('default')

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
          {temp.map((t, i) => (
            <ToggleButton key={i} value={t}>
              {t}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div className='list'>
        <ProductList />
      </div>
    </React.Fragment>
  )
}

export default Product
