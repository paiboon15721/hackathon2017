import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux'

import layout from './layoutReducer'
import searchRoom from './searchRoomReducer'
import roomDetail from './roomDetailReducer'
import auth from './authReducer'

export default combineReducers({
  notifications,
  form,
  auth,
  layout,
  searchRoom,
  roomDetail
})
