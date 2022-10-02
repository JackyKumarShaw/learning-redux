import { createStore } from 'redux'
import theMotherOfAllReducersTheRootReducer from './reducers'

const store = createStore(
  theMotherOfAllReducersTheRootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   <-- This was not needed, its added just so that we can see the store ka content in the Redux DevTools Chrome extension.
export default store
