/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";


const booksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        //gel all books
        getBooks: builder.query({
          query: () => "/books",
          providesTags: ['books','reviews','editBook','addBook']
          
        }),
        // get single book
        getSingleBook: builder.query({
          query: (id) => `/books/${id}`,
          providesTags: ['books','reviews','editBook','addBook']
        }),
    
        // post book 
        addBook: builder.mutation({
          query: (data) => ({
            url: "/books",
            method: "POST",
            body: data,
    
          }),
          invalidatesTags: ["addBook"]
        }),


        // delete book
        deleteBook: builder.mutation({
            query: (id) => ({
              url: `/books/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['books'],
          }),

          // edit book

          editBook: builder.mutation({
            query: ({ id, data }) => ({
              url: `/books/${id}`,
              method: 'PATCH', 
              body: data,
            }),
            invalidatesTags: ['editBook'],
          }),
    
      }),
})

export const {useAddBookMutation,useGetSingleBookQuery, useDeleteBookMutation, useEditBookMutation,useGetBooksQuery} = booksApi