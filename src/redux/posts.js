import axios from 'axios'

const module = 'posts'

const FETCH_POSTS = `${module}/FETCH_POSTS`
const FETCH_POSTS_SUCCESS = `${module}/FETCH_POSTS_SUCCESS`
const FETCH_POSTS_FAIL = `${module}/FETCH_POSTS_FAIL`

const initialState = {
  posts: null,
  isPostsFetching: false,
  postsError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, isPostsFetching: true, postsError: null}
    case FETCH_POSTS_SUCCESS:
      return {...state, isPostsFetching: false, posts: action.posts}
    case FETCH_POSTS_FAIL:
      return {...state, isPostsFetching: false, postsError: action.error}
    default:
      return state
  }
}

export const fetchPosts = () => (dispatch) => {
  dispatch({type: FETCH_POSTS})
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => dispatch({type: FETCH_POSTS_SUCCESS, posts: data}))
    .catch(error => dispatch({type: FETCH_POSTS_FAIL, postsError: error}))
}
