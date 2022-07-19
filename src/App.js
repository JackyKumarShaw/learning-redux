import { createContext } from 'react'
import ComA from './ComA'
const FirstName = createContext()
const LastName = createContext()
function App() {
  return (
    <>
      <FirstName.Provider value={'Rajneesh'}>
        <LastName.Provider value={'Krishnamurti'}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App
export { FirstName, LastName }
