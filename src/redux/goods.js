import axios from 'axios'

const module = 'goods'

const FETCH_GOODS = `${module}/FETCH_GOODS`
const FETCH_GOODS_SUCCESS = `${module}/FETCH_GOODS_SUCCESS`
const FETCH_GOODS_FAIL = `${module}/FETCH_GOODS_FAIL`

const initialState = {
  goods: null,
  isGoodsFetching: false,
  goodsError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      return {...state, isGoodsFetching: true, goodsError: null}
    case FETCH_GOODS_SUCCESS:
      return {...state, isGoodsFetching: false, goods: action.goods}
    case FETCH_GOODS_FAIL:
      return {...state, isGoodsFetching: false, goodsError: action.error}
    default:
      return state
  }
}

export const fetchGoods = () => (dispatch) => {
  dispatch({type: FETCH_GOODS})
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => dispatch({type: FETCH_GOODS_SUCCESS, goods: data}))
    .catch(error => dispatch({type: FETCH_GOODS_FAIL, goodsError: error}))
}
