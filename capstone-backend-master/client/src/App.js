import React, { useEffect } from 'react'
import './common/home.css'
import NavBar from './components/navbar/NavBar'
import Nomatch from './components/nomatch/NoMatch'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/SignUp'
import Product from './components/product/Product'
import ProductDetail from './components/productDetail/ProductDetail'
import CreateOrder from './components/createOrder/CreateOrder'
import ModifyProduct from './components/modifyProduct/ModifyProduct'
import AddProduct from './components/addProduct/AddProduct'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Protected from './components/protected/Protected'
import { connect } from 'react-redux'
import { signOut } from './store/actions/index'

const App = ({ onSignOut, user }) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='/products'
            element={
              <Protected user={user}>
                <Product />
              </Protected>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/products/:id'
            element={
              <Protected user={user}>
                <ProductDetail />
              </Protected>
            }
          />
          <Route
            path='/createorder'
            element={
              <Protected user={user}>
                <CreateOrder />
              </Protected>
            }
          />
          <Route
            path='/addProduct'
            element={
              <Protected user={user}>
                <AddProduct />
              </Protected>
            }
          />
          <Route
            path='/modifyProduct'
            element={
              <Protected user={user}>
                <ModifyProduct />
              </Protected>
            }
          />
          <Route path='*' element={<Nomatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

export default connect(mapStateToProps, null)(App)

//  useEffect(() => {
//    onSignOut()
//  }, [onSignOut])

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignOut: () => dispatch(signOut()),
//   }
// }
