import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

export const articleNumberSlice = createSlice({
    name: 'articleNumber',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload
        }
    }
})

export const { setNumber } = articleNumberSlice.actions
export default articleNumberSlice.reducer