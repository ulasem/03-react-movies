import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const params = {
    params: { query },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const responce = await axios.get<FetchMoviesResponse>(BASE_URL, params);
  return responce.data.results;
}

export default fetchMovies;
