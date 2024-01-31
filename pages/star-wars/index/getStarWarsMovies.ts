export { getStarWarsMovies }
export { filterMoviesData }
export { getTitle }
import { z } from "zod";
import { createZodFetcher } from "zod-fetch";
const fetchWithZod = createZodFetcher();


import type { Movie, MovieDetails } from '../types'



const StarWarsSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(z.object({
    title: z.string(),
    episode_id: z.number(),
    opening_crawl: z.string(),
    director: z.string(),
    producer: z.string(),
    release_date: z.string(),
    characters: z.array(z.string()),
    planets: z.array(z.string()),
    starships: z.array(z.string()),
    vehicles: z.array(z.string()),
    species: z.array(z.string()),
    created: z.string(),
    edited: z.string(),
    url: z.string(),
  })),
})

const StarWarsUrl = 'https://star-wars.brillout.com/api/films.json'

async function getStarWarsMovies(): Promise<MovieDetails[]> {
  const response = await fetchWithZod(StarWarsSchema, StarWarsUrl)
  const movies:MovieDetails[] = response.results.map(movie => {
    return {
      ...movie,
      id: movie.episode_id.toString()
    }
  })
  return movies
}

function filterMoviesData(movies: MovieDetails[]): Movie[] {
  return movies.map((movie: MovieDetails) => {
    const { title, release_date, id } = movie
    return { title, release_date, id }
  })
}

function getTitle(movies: Movie[] | MovieDetails[]): string {
  const title = `${movies.length} Star Wars Movies`
  return title
}