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

export const lists = (state = initialListsState, action: any) => {
  switch (action.type) {
    case GET_MOVIES_REQUESTED:
      return {
        ...state,
        [action.name]: {
          movies: [],
          status: 'requested',
          error: null,
        },
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        [action.name]: {
          movies: action.payload,
          status: 'success',
          error: null,
        },
      };

    case GET_MOVIES_ERROR:
      return {
        ...state,
        [action.name]: {
          movies: [],
          status: 'error',
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
