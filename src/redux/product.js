import axios from 'axios'

const module = 'product'

const FETCH_PRODUCT = `${module}/FETCH_PRODUCT`
const FETCH_PRODUCT_SUCCESS = `${module}/FETCH_PRODUCT_SUCCESS`
const FETCH_PRODUCT_FAIL = `${module}/FETCH_PRODUCT_FAIL`

const initialState = {
  data: null,
  isProductFetching: false,
  productError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {...state, isProductFetching: true, productError: null}
    case FETCH_PRODUCT_SUCCESS:
      return {...state, isProductFetching: false, data: action.data}
    case FETCH_PRODUCT_FAIL:
      return {...state, isProductFetching: false, productError: action.error}
    default:
      return state
  }
}

export const fetchProduct = () => dispatch => {
  dispatch({type: FETCH_PRODUCT})
  axios
    .get('https://next.json-generator.com/api/json/get/EkbfERyFw')
    .then(({data}) => dispatch({type: FETCH_PRODUCT_SUCCESS, data: data}))
    .catch(error => dispatch({type: FETCH_PRODUCT_FAIL, productError: error}))
}
