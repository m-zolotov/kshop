import {combineReducers} from 'redux'

import goods from './goods'
import posts from './posts'
//import partners from './partners'
//import cart from './cart'
//import contacts from './contacts'

export default combineReducers({
  goods,
  posts
})
