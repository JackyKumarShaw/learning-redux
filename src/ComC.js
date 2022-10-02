import React from 'react'
import { incrementCounter, decrementCounter } from './redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
export default function ComC() {
  const countValue = useSelector((StoreMeJoMahaStateHaiWoh) => StoreMeJoMahaStateHaiWoh.updateCountReducer)
  const dispatch = useDispatch()
  console.log(countValue)
  return (
    <>
      <button onClick={() => dispatch(incrementCounter(1))}>Increment++</button>
      <input value={countValue.count} />
      <button onClick={() => dispatch(decrementCounter(1))}>Decrement--</button>
    </>
  )
}
