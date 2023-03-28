import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'grid'
}

export const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const { setMode } = viewModeSlice.actions
export default viewModeSlice.reducer