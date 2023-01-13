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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { initUserState } from './store/actions/index'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = ({ user, onInitUserState }) => {
  useEffect(() => {
    onInitUserState()
  }, [onInitUserState])
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className='app'>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/createorder' element={<CreateOrder />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/modifyProduct/:id' element={<ModifyProduct />} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onInitUserState: () => dispatch(initUserState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
