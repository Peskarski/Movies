//lists
export const getListUrl = (language: string, list: string): string =>
  `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=1`;

export enum ListNames {
  NOW_PLAYING_REQUEST_PATH = 'now_playing',
  UPCOMING_REQUEST_PATH = 'upcoming',
  POPULAR_REQUEST_PATH = 'popular',
}

export const NOW_PLAYING_REQUEST_WORD = 'now_playing';
export const UPCOMING_REQUEST_WORD = 'upcoming';
export const POPULAR_REQUEST_WORD = 'popular';

//genres
export const getGenresUrl = (lng: string) =>
  `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${lng}`;
