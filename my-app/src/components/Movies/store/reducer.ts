import { GET_GENRES_ERROR, GET_GENRES_SUCCESS, GET_GENRES_REQUESTED } from './actions';

export const initialMoviesState = {
  genres: {
    genresList: [],
    status: null,
    error: null,
  },
};

export const movies = (state = initialMoviesState, action: any) => {
  switch (action.type) {
    case GET_GENRES_REQUESTED:
      return {
        ...state,
        genres: {
          genresList: [],
          status: 'requested',
          error: null,
        },
      };

    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: {
          genresList: action.payload,
          status: 'success',
          error: null,
        },
      };

    case GET_GENRES_ERROR:
      return {
        ...state,
        genres: {
          genresList: [],
          status: 'error',
          error: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
