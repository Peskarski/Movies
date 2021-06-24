export const GET_NOW_PLAYING_SUCCESS = 'ADD_NOW_PLAYING_SUCCESS';
export const GET_NOW_PLAYING_ERROR = 'ADD_NOW_PLAYING_ERROR';
export const GET_NOW_PLAYING_REQUESTED = 'ADD_NOW_PLAYING_REQUESTED';

export const getNowPlayingSuccess = (nowPlaying: []) => {
  return {
    type: GET_NOW_PLAYING_SUCCESS,
    payload: nowPlaying,
  };
};

export const getNowPlayingError = (error: Error) => {
  return {
    type: GET_NOW_PLAYING_ERROR,
    payload: error,
  };
};

export const getNowPlayingRequested = (url: string) => {
  return {
    type: GET_NOW_PLAYING_REQUESTED,
    payload: url,
  };
};
