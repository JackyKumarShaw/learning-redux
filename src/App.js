//This is ContextAPI example which is the older technology, the newer technology is the useContextHook which is there in a different branch.
import { createContext } from 'react'
import ComA from './ComA'
const FirstName = createContext()
const LastName = createContext()
function App() {
  return (
    <>
      <FirstName.Provider value={'Jiddu'}>
        <LastName.Provider value={'Krishnamurti'}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App
export { FirstName, LastName }
