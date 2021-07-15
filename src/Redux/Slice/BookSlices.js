import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
      readingList: [],
      discoverList: [],
      finishedList: []
    },
    reducers : {
      loadBooks: (state, action) => {
        state.discoverList.push(action.payload)
      },  
        addToReadingList: (state, action) => {
          state.readingList.push(action.payload)
        },
        removeFromReadingList: (state, action) => {
          state.readingList = state.readingList.filter(r => r.id !== action.payload)
        }
      },
})

export const {loadBooks,addToReadingList, removeFromReadingList} = bookSlice.actions;

const getBooks = (payload) => {
  return (dispatch) => {
    fetch('http://localhost:8000/books')
    .then(res => res.json())
    .then(data => dispatch(loadBooks(data)))
  }
}

export  default  bookSlice.reducer;

