export const GET_GENRES_SUCCESS = 'ADD_GENRES_SUCCESS';
export const GET_GENRES_ERROR = 'ADD_GENRES_ERROR';
export const GET_GENRES_REQUESTED = 'ADD_GENRES_REQUESTED';
export const GET_FILTERED_MOVIES_SUCCESS = 'ADD_FILTERED_MOVIES_SUCCESS';
export const GET_FILTERED_MOVIES_ERROR = 'ADD_FILTERED_MOVIES_ERROR';
export const GET_FILTERED_MOVIES_REQUESTED = 'ADD_FILTERED_MOVIES_REQUESTED';

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
