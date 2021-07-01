export const GET_RANDOM_MOVIE_SUCCESS = 'GET_RANDOM_MOVIE_SUCCESS';
export const GET_RANDOM_MOVIE_ERROR = 'GET_RANDOM_MOVIE_ERROR';
export const GET_RANDOM_MOVIE_REQUESTED = 'GET_RANDOM_MOVIE_REQUESTED';
export const GET_TOTAL_PAGES = 'GET_TOTAL_PAGES';

export const getRandomMovieSuccess = (movie: {}) => {
  return {
    type: GET_RANDOM_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const getRandomMovieError = (error: Error) => {
  return {
    type: GET_RANDOM_MOVIE_ERROR,
    payload: error,
  };
};

export const getRandomMovieRequested = (url: string) => {
  return {
    type: GET_RANDOM_MOVIE_REQUESTED,
    payload: url,
  };
};

export const getTotalPages = (totalPages: Number) => {
  return {
    type: GET_TOTAL_PAGES,
    payload: totalPages,
  };
};
