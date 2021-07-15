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

//details
export const getMovieDetailsUrl = (language: string, id: number): string =>
  `${BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`;

//poster
export const getPosterUrl = (path: string): string => `https://image.tmdb.org/t/p/w500/${path}`;

//recomendations
export const getRecomendationsUrl = (language: string, id: number): string =>
  `${BASE_URL}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=1`;

//request token
export const getRequestTokenUrl = (): string =>
  `${BASE_URL}/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`;

//permission
export const getPermissionUrl = (requestToken: string): string =>
  `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/login/${requestToken}`;

//session token
export const getSessionIDUrl = (request_token: string): string =>
  `${BASE_URL}authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}&request_token=${request_token}`;

//account lists
export const getCreatedListsUrl = (language: string, sessionID: string): string =>
  `${BASE_URL}account/${process.env.REACT_ACCOUNT_ID}/lists?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&session_id=${sessionID}&page=1`;

//create list
export const getCreateListUrl = (sessionID: string): string =>
  `${BASE_URL}list?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionID}`;

//delete list
export const deleteListUrl = (sessionID: string, listID: string): string =>
  `${BASE_URL}list/${listID}?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionID}`;

//add movie to the list
export const getAddMovieToListUrl = (sessionID: string, listID: string): string =>
  `${BASE_URL}list/${listID}/add_item?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionID}`;
