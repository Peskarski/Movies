import {
  GET_RANDOM_MOVIE_REQUESTED,
  GET_RANDOM_MOVIE_ERROR,
  GET_RANDOM_MOVIE_SUCCESS,
  GET_TOTAL_PAGES,
} from './actions';

export const initialRandomMovieState = {
  randomMovie: {
    movie: {},
    status: null,
    error: null,
  },
  totalPages: 0,
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const random = (state = initialRandomMovieState, action: any) => {
  switch (action.type) {
    case GET_RANDOM_MOVIE_REQUESTED:
      return {
        ...state,
        randomMovie: {
          movie: {},
          status: Status.Requested,
          error: null,
        },
      };

    case GET_RANDOM_MOVIE_SUCCESS:
      return {
        ...state,
        randomMovie: {
          movie: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_RANDOM_MOVIE_ERROR:
      return {
        ...state,
        randomMovie: {
          movie: {},
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
