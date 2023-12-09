// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/consts";
import {
  EpisodeDetailsResponse,
  SearchShowResponse,
  ShowDetailsResponse,
  ShowEpisodesResponse,
} from "./schema";

// Define a service using a base URL and expected endpoints
export const tvMazeApi = createApi({
  reducerPath: "tvMazeApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getShowsList: builder.query<SearchShowResponse, string>({
      query: (query) => `search/shows?q=${encodeURIComponent(query)}`,
    }),
    getShowDetails: builder.query<ShowDetailsResponse, number>({
      query: (id) => `shows/${id}`,
    }),
    getShowEpisodes: builder.query<ShowEpisodesResponse, number>({
      query: (id) => `shows/${id}/episodes`,
    }),
    getEpisodeDetails: builder.query<EpisodeDetailsResponse, number>({
      query: (id) => `episodes/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetShowsListQuery,
  useGetShowDetailsQuery,
  useGetShowEpisodesQuery,
  useGetEpisodeDetailsQuery,
} = tvMazeApi;
