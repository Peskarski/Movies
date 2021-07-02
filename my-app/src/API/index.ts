const BASE_URL = 'https://api.themoviedb.org/3/';

//lists
export const getListUrl = (language: string, list: ListNames): string =>
  `${BASE_URL}movie/${list}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=1`;

export enum ListNames {
  NOW_PLAYING_REQUEST_PATH = 'now_playing',
  UPCOMING_REQUEST_PATH = 'upcoming',
  POPULAR_REQUEST_PATH = 'popular',
}

//genres
export const getGenresUrl = (language: string): string =>
  `${BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;

//movies
export const getMoviesUrl = (
  language: string,
  genre: string,
  startDate: string,
  endDate: string,
  page: number
): string =>
  `${BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genre}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}&with_watch_monetization_types=flatrate`;

//poster
export const getPosterUrl = (path: string): string => `https://image.tmdb.org/t/p/w500/${path}`;
