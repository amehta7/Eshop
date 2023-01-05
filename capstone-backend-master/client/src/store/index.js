import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import products from './reducers/products'
import users from './reducers/users'

const rootReducer = combineReducers({
  products,
  users,
})
export default createStore(rootReducer, applyMiddleware(thunk))
