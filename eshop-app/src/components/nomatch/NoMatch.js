import React from 'react'
import { Link } from 'react-router-dom'
import './NoMatch.css'

const Nomatch = () => {
  return (
    <div className='nomatch'>
      <h1>Error!!!</h1>

      <p>
        <Link to='/'>Go to home page</Link>
      </p>
    </div>
  )
}

export default Nomatch
