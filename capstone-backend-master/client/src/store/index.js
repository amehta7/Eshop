import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import products from './reducers/products'
import users from './reducers/users'
import errors from './reducers/errors'
import orders from './reducers/orders'
import addresses from './reducers/addresses'

const rootReducer = combineReducers({
  products,
  users,
  errors,
  orders,
  addresses,
})
export default createStore(rootReducer, applyMiddleware(thunk))
