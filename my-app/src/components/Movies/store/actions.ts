export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const GET_GENRES_ERROR = 'GET_GENRES_ERROR';
export const GET_GENRES_REQUESTED = 'GET_GENRES_REQUESTED';
export const GET_FILTERED_MOVIES_SUCCESS = 'GET_FILTERED_MOVIES_SUCCESS';
export const GET_FILTERED_MOVIES_ERROR = 'GET_FILTERED_MOVIES_ERROR';
export const GET_FILTERED_MOVIES_REQUESTED = 'GET_FILTERED_MOVIES_REQUESTED';
export const GET_TOTAL_PAGES = 'GET_TOTAL_PAGES';

export const getGenresSuccess = (genres: []) => {
  return {
    type: GET_GENRES_SUCCESS,
    payload: genres,
  };
};

export const getGenresError = (error: Error) => {
  return {
    type: GET_GENRES_ERROR,
    payload: error,
  };
};

export const getGenresRequested = (url: string) => {
  return {
    type: GET_GENRES_REQUESTED,
    payload: url,
  };
};

export const getFilteredMoviesSuccess = (movies: []) => {
  return {
    type: GET_FILTERED_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const getFilteredMoviesError = (error: Error) => {
  return {
    type: GET_FILTERED_MOVIES_ERROR,
    payload: error,
  };
};

export const getFilteredMoviesRequested = (url: string) => {
  return {
    type: GET_FILTERED_MOVIES_REQUESTED,
    payload: url,
  };
};

export const getTotalPages = (totalPages: Number) => {
  return {
    type: GET_TOTAL_PAGES,
    payload: totalPages,
  };
};
