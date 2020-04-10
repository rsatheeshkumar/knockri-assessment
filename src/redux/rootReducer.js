import { combineReducers } from 'redux'
import global from './global/reducer'
import details from '../container/CandidateContainer/reducer'
import application from '../container/ApplicationContainer/reducer'

const rootReducer = combineReducers({
  global,
  details,
  application,
})

export default rootReducer
