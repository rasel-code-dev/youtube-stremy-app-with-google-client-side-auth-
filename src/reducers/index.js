import { combineReducers } from 'redux'

import streamsReducers from './streamReducers'
import utilsReducers from './streamReducers'


export default combineReducers({
  streams: streamsReducers,
  utils: utilsReducers
})