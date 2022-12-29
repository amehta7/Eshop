import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'
import Select from 'react-select'
import './ProductList.css'

const options = [
  { value: 'default', label: 'Default' },
  { value: 'desc', label: 'Price: High to Low' },
  { value: 'asc', label: 'Price: Low to High' },
  { value: 'newest', label: 'Newest' },
]

const ProductList = () => {
  return (
    <React.Fragment>
      <div className='sort-div'>
        Sort By:
        <Select defaultValue='Select...' options={options} />
      </div>
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            className='imageCard'
            component='img'
            alt='green iguana'
            height='140'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaYmmrvorlDtfO54XH9ZjZRTN6twggjxr0A&usqp=CAU'
            style={{ objectFit: 'fill' }}
          />
          <CardContent>
            <div className='content'>
              <div>Shoes</div>
              <div>$ 1000</div>
            </div>
            <div>
              <p>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </p>
            </div>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              variant='contained'
              href='/product/2'
              style={{ backgroundColor: '#3f51b5' }}
            >
              BUY
            </Button>
            <div className='icon'>
              <div>
                <CreateIcon size='small' />
              </div>
              <div>
                <DeleteIcon />
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default ProductList
