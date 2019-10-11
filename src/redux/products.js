import axios from 'axios'

const module = 'products'

const FETCH_PRODUCTS = `${module}/FETCH_PRODUCTS`
const FETCH_PRODUCTS_SUCCESS = `${module}/FETCH_PRODUCTS_SUCCESS`
const FETCH_PRODUCTS_FAIL = `${module}/FETCH_PRODUCTS_FAIL`

const initialState = {
  products: null,
  isProductsFetching: false,
  productsError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, isProductsFetching: true, productsError: null}
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, isProductsFetching: false, products: action.products}
    case FETCH_PRODUCTS_FAIL:
      return {...state, isProductsFetching: false, productsError: action.error}
    default:
      return state
  }
}

export const fetchProducts = () => dispatch => {
  dispatch({type: FETCH_PRODUCTS})
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => dispatch({type: FETCH_PRODUCTS_SUCCESS, products: data}))
    .catch(error => dispatch({type: FETCH_PRODUCTS_FAIL, productsError: error}))
}
