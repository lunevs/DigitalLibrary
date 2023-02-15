import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        loadBooks: (state, action) => {
            return action.payload;
        },
        updateBook: (state, action) => {

        },
        deleteBook: (state, action) => {
            return state.filter(el => el._id !== action.payload);
        },
        addBook: (state, action) => {
            return [...state, action.payload];
        }
    },
})

export const { loadBooks, addBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer