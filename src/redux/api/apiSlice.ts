/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ["books", "book"],
  endpoints: (builder) => ({
    //gel all books
    getBooks: builder.query({
      query: () => "/books",
      
    }),
    // get single book
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    // post book 
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,

      }),
      invalidatesTags: ["books"]
    }),

  }),
})


export const { useGetBooksQuery, useGetSingleBookQuery, useAddBookMutation } = api