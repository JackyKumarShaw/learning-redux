//Inital State
const initialState = { count: 0 }

//Reducer
//reducer is the functions that takes the current state and the action and performs the type of action stated in the action.type on the currentState.
const updateCountReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...currentState,
        count: currentState.count + action.payload,
      }

    case 'DECREMENT':
      return {
        ...currentState,
        count: currentState.count - action.payload,
      }

    default:
      return currentState
  }
}

export default updateCountReducer
