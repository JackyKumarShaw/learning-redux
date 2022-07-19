import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const incrementCounter = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const decrementCounter = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }
  return (
    <>
      <button onClick={incrementCounter}> Inc+ </button>
      <span>{state.count}</span>
      <button onClick={decrementCounter}> Dec- </button>
    </>
  )
}

export default App
