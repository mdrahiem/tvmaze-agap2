// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/consts";
import { SearchShowResponse } from "./schema";

// Define a service using a base URL and expected endpoints
export const tvMazeApi = createApi({
  reducerPath: "tvMazeApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getShowsList: builder.query<SearchShowResponse, string>({
      query: (query) => `search/shows?q=${encodeURIComponent(query)}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShowsListQuery } = tvMazeApi;
