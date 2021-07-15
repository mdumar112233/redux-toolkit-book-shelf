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
    
  }
}

export  default  bookSlice.reducer;

