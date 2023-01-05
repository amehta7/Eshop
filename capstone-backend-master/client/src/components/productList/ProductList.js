import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import './ProductList.css'
import DeleteProduct from '../deleteProduct/DeleteProduct'

const ProductList = ({ products }) => {
  return (
    <React.Fragment>
      <div className='card'>
        {products &&
          products.map(({ id, name, price, imageURL, description }) => {
            return (
              <div key={id} className='main-div'>
                <Card sx={{ maxWidth: 345 }} key={id}>
                  <CardMedia
                    className='imageCard'
                    component='img'
                    alt={name}
                    height='140'
                    image={imageURL}
                    style={{ objectFit: 'fill' }}
                  />
                  <CardContent>
                    <div className='content'>
                      <div>{name}</div>
                      <div>$ {price}</div>
                    </div>
                    <div>
                      <p>{description}</p>
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
                      <div className='modify-div'>
                        <Button color='inherit' href='/modifyProduct'>
                          <CreateIcon size='small' />
                        </Button>
                      </div>
                      <div className='del-div'>
                        <DeleteProduct name={name} />
                      </div>
                    </div>
                  </CardActions>
                </Card>
              </div>
            )
          })}
      </div>
    </React.Fragment>
  )
}

export default ProductList
