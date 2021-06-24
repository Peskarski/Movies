import { GET_NOW_PLAYING_SUCCESS, GET_NOW_PLAYING_REQUESTED, GET_NOW_PLAYING_ERROR } from './actions';

export const initialListsState = {
  nowPlaying: {
    movies: [],
    status: null,
    error: null,
  },
};

export const lists = (state = initialListsState, action: any) => {
  switch (action.type) {
    case GET_NOW_PLAYING_REQUESTED:
      return {
        ...state,
        nowPlaying: {
          movies: [],
          status: 'requested',
          error: null,
        },
      };

    case GET_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        nowPlaying: {
          movies: action.payload,
          status: 'success',
          error: null,
        },
      };

    case GET_NOW_PLAYING_ERROR:
      return {
        ...state,
        nowPlaying: {
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
