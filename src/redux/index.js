import {combineReducers} from 'redux'

import products from './products'
import posts from './posts'
//import partners from './partners'
//import cart from './cart'
//import contacts from './contacts'

export default combineReducers({
  products,
  posts
})
