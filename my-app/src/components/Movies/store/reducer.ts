import {
  GET_GENRES_ERROR,
  GET_GENRES_SUCCESS,
  GET_GENRES_REQUESTED,
  GET_FILTERED_MOVIES_REQUESTED,
  GET_FILTERED_MOVIES_ERROR,
  GET_FILTERED_MOVIES_SUCCESS,
} from './actions';

export const initialMoviesState = {
  genres: {
    genresList: [],
    status: null,
    error: null,
  },
  filteredMovies: {
    movies: [],
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

    case GET_FILTERED_MOVIES_REQUESTED:
      return {
        ...state,
        filteredMovies: {
          movies: [],
          status: 'requested',
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_SUCCESS:
      return {
        ...state,
        filteredMovies: {
          movies: action.payload,
          status: 'success',
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_ERROR:
      return {
        ...state,
        filteredMovies: {
          movies: [],
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
