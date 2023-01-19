import React from 'react'
import './Home.css'
import mainImage from '../../assets/main.jpg'
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <React.Fragment>
      <div className='image-container'>
        <img src={mainImage} alt='Background_Image' style={{ width: '100%' }} />
        <div className='top-right'>
          <p className='head1'>SHOP OUR NEW COLLECTION</p>
          <p className='head2'>
            FROM HEIGHT TO LOW, CLASSIC OR MODERN. WE HAVE YOU COVERED
          </p>
          <div className='shop-div'>
            <Button
              variant='outlined'
              size='large'
              style={{
                color: 'white',
                backgroundColor: '#e50c6b',
                textDecoration: 'none',
              }}
              href='/login'
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
