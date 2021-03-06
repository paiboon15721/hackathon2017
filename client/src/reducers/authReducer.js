import { FETCH_USER_SUCCESS } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload || false
    default:
      return state
  }
}
