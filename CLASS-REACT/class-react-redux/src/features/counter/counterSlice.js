import { createSlice } from "@reduxjs/toolkit";


/**
 * step 1: create a slice
 * createSlice the help todo state update, change, action
 * (point) createSlice => (object {}), (property), (function)
 */
export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {  //  tow types parameter 1: (state) 2: (action)  action us waqt use karte hn jab data kisi object ke ander data apdate karwani ho 
            state.value += 1
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += parseInt(action.payload)
        },
        decrementByAmount: (state, action) => {
            state.value -= parseInt(action.payload)
        },
    }
});

/**
 * step 2: export the action
 * todo explicity export function from the slice so that we can use in component
 */

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

/**
 * step 3: export the reducer
 * just for the store to recognize as a reducer
 */

export default counterSlice.reducer;