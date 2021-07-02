import {
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_REQUESTED,
  GET_MOVIE_DETAILS_ERROR,
  GET_RECOMENDATIONS_REQUESTED,
  GET_RECOMENDATIONS_SUCCESS,
  GET_RECOMENDATIONS_ERROR,
} from './actions';

export const initialMovieDetailsState = {
  details: {},
  status: null,
  error: null,
  recomendations: {
    movies: [],
    status: null,
    error: null,
  },
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const movieDetails = (state = initialMovieDetailsState, action: any) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUESTED:
      return {
        ...state,
        status: Status.Requested,
      };

    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        status: Status.Success,
      };

    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        status: Status.Error,
        error: action.payload,
      };

    case GET_RECOMENDATIONS_REQUESTED:
      return {
        ...state,
        recomendations: {
          movies: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_RECOMENDATIONS_SUCCESS:
      return {
        ...state,
        recomendations: {
          movies: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_RECOMENDATIONS_ERROR:
      return {
        ...state,
        recomendations: {
          movies: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
