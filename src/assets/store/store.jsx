// import { configureStore } from "@reduxjs/toolkit";
// import counterslice from "../slices/counterslice";
// const store = configureStore({
//   reducer:{
//     counterslice,
//   }
// });
// export default store;
////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterslice";
const store = configureStore({
    reducer:{
     counterSlice
    }
})
export default store;