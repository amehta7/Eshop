import React, { memo } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import './ProductList.css'
import DeleteProduct from '../deleteProduct/DeleteProduct'
import { connect } from 'react-redux'

const ProductList = memo(({ products, user }) => {
  return (
    <React.Fragment>
      <div className='card'>
        {products &&
          products.map(({ _id, name, price, imageURL, description }) => {
            return (
              <div key={_id} className='main-div'>
                <Card sx={{ maxWidth: 345 }} key={_id}>
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
                      style={{ backgroundColor: '#3f51b5' }}
                      href={`/products/${_id}`}
                    >
                      BUY
                    </Button>
                    {user.role === 'admin' ||
                    user.email === 'admin@upgrad.com' ? (
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
                    ) : null}
                  </CardActions>
                </Card>
              </div>
            )
          })}
      </div>
    </React.Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

export default connect(mapStateToProps, null)(ProductList)
