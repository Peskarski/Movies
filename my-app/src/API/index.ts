//lists
export const getListUrl = (language: string, list: ListNames): string =>
  `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=1`;

export enum ListNames {
  NOW_PLAYING_REQUEST_PATH = 'now_playing',
  UPCOMING_REQUEST_PATH = 'upcoming',
  POPULAR_REQUEST_PATH = 'popular',
}

//genres
export const getGenresUrl = (language: string): string =>
  `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;

//movies
export const getMoviesUrl = (language: string, genre: string, startDate: string, endDate: string): string =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genre}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&with_watch_monetization_types=flatrate`;
