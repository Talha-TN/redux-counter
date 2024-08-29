import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterslice";
const store = configureStore({
    reducer:{
     counterSlice
    }
})
export default store;