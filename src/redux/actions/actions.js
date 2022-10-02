//Types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Actions
export const incrementCounter = (payload) => {
  return {
    type: INCREMENT,
    payload,
  }
}

export const decrementCounter = (payload) => {
  return {
    type: DECREMENT,
    payload,
  }
}
