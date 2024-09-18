// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quran-endpoint.vercel.app" }),
  endpoints: (builder) => ({
    // music
    getQuran: builder.query({
      query: () => "/quran",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuranQuery } = musicApi;
