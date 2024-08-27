// import React from "react";
// import { increment, decrement, reset } from "../slices/counterslice";
// import { useDispatch, useSelector } from "react-redux";
// const DisplayCounter = () => {
//   const count = useSelector((state) => state.counterslice.value);
//   const dispatch = useDispatch();
//   return (
//     <center>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <button onClick={() => dispatch(reset())}>reset</button>
//     </center>
//   );
// };
// export default DisplayCounter;
///////////////////////////////////////////////////////////////
import React from 'react'
import { increment,decrement,reset } from '../slices/counterslice'
import { useDispatch,useSelector} from 'react-redux'
const DisplayCounter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterSlice.value)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default DisplayCounter