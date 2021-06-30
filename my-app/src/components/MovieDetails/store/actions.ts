export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_ERROR = 'GET_MOVIE_DETAILS_ERROR';
export const GET_MOVIE_DETAILS_REQUESTED = 'GET_MOVIE_DETAILS_REQUESTED';

export const getMovieDetailsSuccess = (details: {}) => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: details,
  };
};

export const getMovieDetailsError = (error: Error) => {
  return {
    type: GET_MOVIE_DETAILS_ERROR,
    payload: error,
  };
};

export const getMovieDetailsRequested = (url: string) => {
  return {
    type: GET_MOVIE_DETAILS_REQUESTED,
    payload: url,
  };
};
