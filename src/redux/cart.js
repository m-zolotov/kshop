/*
import axios from 'axios'

const module = 'photos'

const FETCH_PHOTOS = `${module}/FETCH_PHOTOS`
const FETCH_PHOTOS_SUCCESS = `${module}/FETCH_PHOTOS_SUCCESS`
const FETCH_PHOTOS_FAIL = `${module}/FETCH_PHOTOS_FAIL`

const initialState = {
  photos: null,
  isPhotosFetching: false,
  photosError: null,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {...state, isPhotosFetching: true, photosError: null}
    case FETCH_PHOTOS_SUCCESS:
      return {...state, isPhotosFetching: false, photos: action.photos}
    case FETCH_PHOTOS_FAIL:
      return {...state, isPhotosFetching: false, photosError: action.error}
    default:
      return state
  }
}

export const fetchPhotos = () => (dispatch) => {
  dispatch({type: FETCH_PHOTOS})
  axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then(({data}) => dispatch({type: FETCH_PHOTOS_SUCCESS, photos: data}))
    .catch(error => dispatch({type: FETCH_PHOTOS_FAIL, photos: error}))
}
*/
