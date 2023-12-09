import { z } from "zod";

export const showSingleSchema = z.object({
  id: z.number(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  language: z.string(),
  genres: z.array(z.string()),
  status: z.string(),
  runtime: z.number(),
  averageRuntime: z.number(),
  premiered: z.string(),
  ended: z.string(),
  officialSite: z.string(),
  schedule: z.object({ time: z.string(), days: z.array(z.string()) }),
  rating: z.object({ average: z.number() }),
  weight: z.number(),
  network: z.object({
    id: z.number(),
    name: z.string(),
    country: z.object({
      name: z.string(),
      code: z.string(),
      timezone: z.string(),
    }),
    officialSite: z.null(),
  }),
  webChannel: z.null(),
  dvdCountry: z.null(),
  externals: z.object({
    tvrage: z.null(),
    thetvdb: z.number(),
    imdb: z.string(),
  }),
  image: z.object({ medium: z.string(), original: z.string() }),
  summary: z.string(),
  updated: z.number(),
  _links: z.object({
    self: z.object({ href: z.string() }),
    previousepisode: z.object({ href: z.string() }),
  }),
});

export const searchShowResponseSchema = z.array(
  z.object({
    score: z.number(),
    show: showSingleSchema,
  })
);

export const showDetailsResponseSchema = showSingleSchema;

export const episodeSchema = z.object({
  id: z.number(),
  url: z.string(),
  name: z.string(),
  season: z.number(),
  number: z.number(),
  type: z.string(),
  airdate: z.string(),
  airtime: z.string(),
  airstamp: z.string(),
  runtime: z.number(),
  rating: z.object({ average: z.number() }),
  image: z.object({ medium: z.string(), original: z.string() }),
  summary: z.string(),
  _links: z.object({
    self: z.object({ href: z.string() }),
    show: z.object({ href: z.string() }),
  }),
});
export const showEpisodesResponseSchema = z.array(episodeSchema);

export const episodeDetailsResponseSchema = episodeSchema;

export type SearchShowResponse = z.infer<typeof searchShowResponseSchema>;
export type ShowDetailsResponse = z.infer<typeof showDetailsResponseSchema>;
export type ShowEpisodesResponse = z.infer<typeof showEpisodesResponseSchema>;
export type EpisodeDetailsResponse = z.infer<
  typeof episodeDetailsResponseSchema
>;
