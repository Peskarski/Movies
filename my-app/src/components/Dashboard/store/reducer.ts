import { GET_MOVIES_SUCCESS, GET_MOVIES_REQUESTED, GET_MOVIES_ERROR, SET_INITIAL_MOVIES_STATE } from './actions';

const moviesList = {
  movies: [],
  status: null,
  error: null,
};

export const initialListsState = {
  nowPlaying: moviesList,
  upcoming: moviesList,
  popular: moviesList,
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const lists = (state = initialListsState, action: any) => {
  switch (action.type) {
    case GET_MOVIES_REQUESTED:
      return {
        ...state,
        [action.name]: {
          movies: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        [action.name]: {
          movies: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_MOVIES_ERROR:
      return {
        ...state,
        [action.name]: {
          movies: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    case SET_INITIAL_MOVIES_STATE:
      return {
        ...initialListsState,
      };

    default:
      return {
        ...state,
      };
  }
};
