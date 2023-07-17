/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-catalogue-server-sepia.vercel.app/api/v1' }),
  tagTypes: ['books','reviews','editBook','addBook',"deleteBook",
  "wishlist",
  "reading-list"],
  endpoints: () => ({}),
})


