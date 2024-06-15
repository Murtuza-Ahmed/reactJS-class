import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"

export const store = configureStore({
    // id: 1,
    reducer: {
        counter: counterSlice   //  counter is state
    }
})