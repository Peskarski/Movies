export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_ERROR = 'GET_MOVIE_DETAILS_ERROR';
export const GET_MOVIE_DETAILS_REQUESTED = 'GET_MOVIE_DETAILS_REQUESTED';
export const GET_RECOMENDATIONS_REQUESTED = 'GET_RECOMENDATIONS_REQUESTED';
export const GET_RECOMENDATIONS_SUCCESS = 'GET_RECOMENDATIONS_SUCCESS';
export const GET_RECOMENDATIONS_ERROR = 'GET_RECOMENDATIONS_ERROR';

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

export const getRecomendationsSuccess = (recomendations: []) => {
  return {
    type: GET_RECOMENDATIONS_SUCCESS,
    payload: recomendations,
  };
};

export const getRecomendationsError = (error: Error) => {
  return {
    type: GET_RECOMENDATIONS_ERROR,
    payload: error,
  };
};

export const getRecomendationsRequested = (url: string) => {
  return {
    type: GET_RECOMENDATIONS_REQUESTED,
    payload: url,
  };
};
