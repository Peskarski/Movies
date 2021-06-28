export const API_KEY: string = 'bb2b538ec7dc87a9a9ecaa9065c3baff';

//lists
export const getListUrl = (lng: string, list: string): string =>
  `https://api.themoviedb.org/3/movie/${list}?api_key=${API_KEY}&language=${lng}&page=1`;

export const NOW_PLAYING_REQUEST_WORD = 'now_playing';
export const UPCOMING_REQUEST_WORD = 'upcoming';
export const POPULAR_REQUEST_WORD = 'popular';

//genres
export const getGenresUrl = (lng: string) =>
  `https://api.themoviedb.org/3/genre/movie/list?api_key=bb2b538ec7dc87a9a9ecaa9065c3baff&language=${lng}`;
