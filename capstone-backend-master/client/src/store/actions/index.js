import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const baseURL = 'http://localhost:3001/api/v1'

const responseErrorHandler = (response) => {
  if (!response.ok) {
    throw response
  }
  return response
}

const getToken = () => {
  const token = window.localStorage.getItem('token')
  return token
}

export const fetchProducts = () => (dispatch) =>
  fetch(`${baseURL}/products`)
    .then(responseErrorHandler)
    .then((res) => res.json())
    .then((products) => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )

export const setFilter = (category) => {
  return {
    type: 'SET_FILTER',
    filter: category,
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  }
}

export const fetchCategories = () => (dispatch) =>
  fetch(`${baseURL}/products/categories`)
    .then(responseErrorHandler)
    .then((res) => res.json())
    .then((categories) =>
      dispatch({ type: 'GET_CATEGORIES_SUCCESS', categories })
    )
    .catch(() =>
      dispatch({
        type: 'GET_CATEGORIES_FAILURE',
      })
    )

export const fetchProductsByName = (query) => (dispatch) =>
  fetch(`${baseURL}/products?name=${query}`)
    .then(responseErrorHandler)
    .then((res) => res.json())
    .then((products) => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )

export const fetchProductsBySort = (sortBy, direction) => (dispatch) =>
  fetch(`${baseURL}/products?sortBy=${sortBy}&direction=${direction}`)
    .then(responseErrorHandler)
    .then((res) => res.json())
    .then((products) => {
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )

export const getProById = async (id) => {
  let response = await fetch(`${baseURL}/products/${id}`)
  let data = await response.json()
  console.log(data)
  return data
}
export const fetchProductById = (id) => (dispatch) =>
  getProById(id)
    .then((products) => {
      console.log(products)
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', products })
    })
    .catch(() =>
      dispatch({
        type: 'GET_PRODUCTS_FAILURE',
      })
    )

const doDeleteProduct = async (id) => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/products/${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const deleteProduct = (id) => (dispatch) =>
  doDeleteProduct(id)
    .then((products) => {
      console.log(products)
      dispatch({ type: 'DELETE_PRODUCTS_SUCCESS', products })
      toast.success(`Product ${products.name} deleted successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      })
      console.log('deleted')
    })
    .catch(() =>
      dispatch({
        type: 'DELETE_PRODUCTS_FAILURE',
      })
    )

const doAddProduct = async (
  name,
  category,
  manufacturer,
  price,
  availableItems,
  imageURL,
  description
) => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/products`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const addProduct =
  (
    name,
    category,
    manufacturer,
    price,
    availableItems,
    imageURL,
    description,
    navigate
  ) =>
  (dispatch) => {
    doAddProduct(
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description
    )
      .then((products) => {
        console.log(products)
        dispatch({ type: 'ADD_PRODUCT_SUCCESS', products })
        toast.success(`Product ${products.name} added successfully`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log('added')
        navigate('/products')
      })
      .catch(() =>
        dispatch({
          type: 'ADD_PRODUCT_FAILURE',
        })
      )
  }

const doUpdateProduct = async (
  id,
  name,
  category,
  manufacturer,
  price,
  availableItems,
  imageURL,
  description
) => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/products/${id}`, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const updateProduct =
  (
    id,
    name,
    category,
    manufacturer,
    price,
    availableItems,
    imageURL,
    description,
    navigate
  ) =>
  (dispatch) => {
    doUpdateProduct(
      id,
      name,
      category,
      manufacturer,
      price,
      availableItems,
      imageURL,
      description
    )
      .then((products) => {
        console.log(products)
        dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', products })
        toast.success(`Product ${products.name} modified successfully`, {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log('updated')
        navigate('/products')
      })
      .catch(() =>
        dispatch({
          type: 'UPDATE_PRODUCT_FAILURE',
        })
      )
  }

const doSignIn = async (email, password) => {
  let response = await fetch(`${baseURL}/auth`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const signIn = (email, password, navigate, location) => (dispatch) =>
  doSignIn(email, password)
    .then((data) => {
      const { token, user } = data
      console.log(user)
      console.log(token)
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('user', JSON.stringify(user))
      dispatch({ type: 'SIGNIN_SUCCESS', user })
      const { from } = (location && location.state) || {
        from: { pathname: '/products' },
      }
      navigate(from)
    })
    .catch(() => {
      dispatch({ type: 'SIGNIN_FAILURE' })
    })

const doSignUp = async (
  firstName,
  lastName,
  email,
  password,
  contactNumber
) => {
  let response = await fetch(`${baseURL}/users`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      contactNumber,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const signUp =
  (firstName, lastName, email, password, contactNumber, navigate) =>
  (dispatch) => {
    doSignUp(firstName, lastName, email, password, contactNumber)
      .then((user) => {
        console.log(user)
        dispatch({ type: 'SIGNUP_SUCCESS', user })
        navigate('/login')
      })
      .catch(() => {
        dispatch({ type: 'SIGNUP_FAILURE' })
      })
  }

const initUser = async () => {
  let token = await getToken()
  let user = JSON.parse(window.localStorage.getItem('user'))
  if (token) {
    let response = await fetch(`${baseURL}/verify`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token }),
    })
    let data = await response.json()
    console.log(data)
    return user
  }
}

export const initUserState = () => (dispatch) =>
  initUser()
    .then((user) => {
      console.log(user)
      dispatch({ type: 'INIT_SUCCESS', user })
    })
    .catch(() => {
      dispatch({ type: 'INIT_FAILURE' })
    })

const doSignOut = () =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      resolve(true)
    } catch {
      reject(false)
    }
  })

export const signOut = () => (dispatch) => {
  doSignOut()
    .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
    .catch(() => dispatch({ type: 'SIGNOUT_FAILURE' }))
}

export const addToCart = (products, quantity) => {
  return {
    type: 'ADD_TO_CART',
    order: products,
    quantity: quantity,
  }
}

export const addToAddress = (address) => {
  return {
    type: 'ADD_TO_ADDRESS',
    selectedAddress: address,
  }
}

const doAddAddress = async (
  name,
  contactNumber,
  street,
  city,
  state,
  landmark,
  zipCode
) => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/addresses`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      contactNumber,
      street,
      city,
      state,
      landmark,
      zipCode,
    }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const addAddress =
  (name, contactNumber, street, city, state, landmark, zipCode) => (dispatch) =>
    doAddAddress(name, contactNumber, street, city, state, landmark, zipCode)
      .then((address) => {
        console.log(address._doc)
        dispatch({ type: 'ADD_ADDRESS_SUCCESS', address: address._doc })
      })
      .catch(() => {
        dispatch({
          type: 'ADD_ADDRESS_FAILURE',
        })
      })

const doGetAddress = async () => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/addresses`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const getAddress = () => (dispatch) =>
  doGetAddress()
    .then((address) => {
      console.log(address)
      dispatch({ type: 'GET_ADDRESS_SUCCESS', address: address })
    })
    .catch(() => {
      dispatch({
        type: 'GET_ADDRESS_FAILURE',
      })
    })

const doConfirmOrder = async (product, address, quantity) => {
  let token = await getToken()
  let response = await fetch(`${baseURL}/orders`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ product, address, quantity }),
  })
  let data = await response.json()
  console.log(data)
  return data
}

export const confirmOrder = (product, address, quantity) => (dispatch) => {
  doConfirmOrder(product, address, quantity)
    .then((order) => {
      console.log(order)
      dispatch({ type: 'CONFIRM_ORDER_SUCCESS', order })

      console.log('order created')
    })
    .catch(() => {
      dispatch({ type: 'CONFIRM_ORDER_FAILURE' })
    })
}
