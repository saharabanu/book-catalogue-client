/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  _id: string | null;
  title: string | null;
  author: string | null;
  genre: string | null;
  publicationDate: string | null;
  reviews: string[];
}

interface IBookState {
  book?: IBook;
  status?: boolean;
  modalStatus?:boolean
}

const initialState: IBookState = {
  book: {
    _id: null,
    title: null,
    author: null,
    genre: null,
    publicationDate: null,
    reviews: [],
  },
  status: true,
  modalStatus:true
};

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.book = action.payload;
      state.status = true
    },
    deleteBook: (state) => {
      state.book = {
        _id: null,
        title: null,
        author: null,
        genre: null,
        publicationDate: null,
        reviews: [],
      };
      state.status = true
    },
    resetStatus: (state) => {
      state.status = false;
    },
    toggleModal:(state,action)=>{
    state.modalStatus = action.payload
    }
  },
});

export const { addBook,deleteBook ,resetStatus,toggleModal} = BookSlice.actions;
export default BookSlice.reducer
