import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import './Product.css'
import Select from 'react-select'

let temp = ['All', 'Apparel', 'Electronics', 'Personal Care']

const options = [
  { value: 'default', label: 'Default' },
  { value: 'desc', label: 'Price: High to Low' },
  { value: 'asc', label: 'Price: Low to High' },
  { value: 'newest', label: 'Newest' },
]

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
      <div className='sort-div'>
        Sort By:
        <Select defaultValue='Select...' options={options} />
      </div>
    </React.Fragment>
  )
}

export default Product
