// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'feed',
  // JSON DATA IS SERVED FROM PORT 4000
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }), 
  endpoints: (builder) => ({
    getFeedData: builder.query({
      //ENCODE THE QUERY STRING TO PREVENT XSS ATTACKS
      query: (name) => name ? `feed?q=${encodeURIComponent(name)}` : 'feed',
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFeedDataQuery } = api;