import { combineReducers } from 'redux'
import updateCountReducer from './reducers'

const theMotherOfAllReducersTheRootReducer = combineReducers({
  updateCountReducer,
})

export default theMotherOfAllReducersTheRootReducer
