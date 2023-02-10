import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        loadBooks: (state, action) => {
            return action.payload;
        },
    },
})

export const { loadBooks } = bookSlice.actions

export default bookSlice.reducer