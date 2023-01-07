import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import products from './reducers/products'
import users from './reducers/users'
import errors from './reducers/errors'

const rootReducer = combineReducers({
  products,
  users,
  errors,
})
export default createStore(rootReducer, applyMiddleware(thunk))
