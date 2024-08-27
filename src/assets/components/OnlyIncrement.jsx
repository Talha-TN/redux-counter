import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterslice'

const OnlyIncrement = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterSlice.value)
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>only inc comp button</button>
        <h1>{count}</h1>
    </div>
  )
}

export default OnlyIncrement