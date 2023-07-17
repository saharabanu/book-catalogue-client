/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { BookData, IBook, ReadData } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";


const booksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        //gel all books
        getBooks: builder.query({
          query: (params) => `/books${params ? `?${params}` : ""}`,
          providesTags: ['books','reviews','editBook','addBook', "deleteBook"]
          
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

          // post reviews 

          postComment: builder.mutation({
            query: ({ id, data }) => ({
              url: `/books/comment/${id}`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["reviews"],
          }),

          // get review 
          getComment: builder.query({
            query: (id) => `/books/comment/${id}`,
            providesTags: ["reviews"],
          }),
          // post wishlist
          createWishlist: builder.mutation<BookData, Partial<BookData>>({
            query: (bookData: IBook) => ({
              url: "/books/wishlist",
              method: "POST",
              body: bookData,
            }),
            invalidatesTags: ["wishlist"],
          }),
         // create reading list
          createReadingList: builder.mutation<ReadData, Partial<ReadData>>({
            query: (bookData: IBook) => ({
              url: "/books/reading-list",
              method: "POST",
              body: bookData,
            }),
            invalidatesTags: ["reading-list"],
          }),
          removeWishlist: builder.mutation<IBook | null, string>({
            query: (bookId) => ({
              url: `/books/wishlist/${bookId}`,
              method: "DELETE",
            }),
            invalidatesTags: ["wishlist"],
          }),
          removeReadingList: builder.mutation<IBook | null, string>({
            query: (bookId) => ({
              url: `/books/reading-list/${bookId}`,
              method: "DELETE",
            }),
            invalidatesTags: ["reading-list"],
          }),
      
          getWishlist: builder.query({
            query: () => "/books/wishlist",
            providesTags: ["wishlist"],
          }),
          getReadingList: builder.query({
            query: () => "/books/reading-list",
            providesTags: ["reading-list"],
          }),
    
      }),
})

export const {useGetBooksQuery,useAddBookMutation,useGetSingleBookQuery, useDeleteBookMutation, useEditBookMutation, usePostCommentMutation, useGetCommentQuery, useCreateWishlistMutation, useCreateReadingListMutation,useRemoveWishlistMutation,useRemoveReadingListMutation,useGetWishlistQuery,useGetReadingListQuery} = booksApi