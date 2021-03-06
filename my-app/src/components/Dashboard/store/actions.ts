export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
export const GET_MOVIES_REQUESTED = 'GET_MOVIES_REQUESTED';
export const SET_INITIAL_MOVIES_STATE = 'SET_INITIAL_MOVIES_STATE';

export const NOW_PLAYING = 'nowPlaying';
export const UPCOMING = 'upcoming';
export const POPULAR = 'popular';

export const getNowPlayingSuccess = (movies: []) => {
  return {
    type: GET_MOVIES_SUCCESS,
    name: NOW_PLAYING,
    payload: movies,
  };
};

export const getNowPlayingError = (error: Error) => {
  return {
    type: GET_MOVIES_ERROR,
    name: NOW_PLAYING,
    payload: error,
  };
};

export const getNowPlayingRequested = (url: string) => {
  return {
    type: GET_MOVIES_REQUESTED,
    name: NOW_PLAYING,
    payload: url,
  };
};

export const getUpcomingSuccess = (movies: []) => {
  return {
    type: GET_MOVIES_SUCCESS,
    name: UPCOMING,
    payload: movies,
  };
};

export const getUpcomingError = (error: Error) => {
  return {
    type: GET_MOVIES_ERROR,
    name: UPCOMING,
    payload: error,
  };
};

export const getUpcomingRequested = (url: string) => {
  return {
    type: GET_MOVIES_REQUESTED,
    name: UPCOMING,
    payload: url,
  };
};

export const getPopularSuccess = (movies: []) => {
  return {
    type: GET_MOVIES_SUCCESS,
    name: POPULAR,
    payload: movies,
  };
};

export const getPopularError = (error: Error) => {
  return {
    type: GET_MOVIES_ERROR,
    name: POPULAR,
    payload: error,
  };
};

export const getPopularRequested = (url: string) => {
  return {
    type: GET_MOVIES_REQUESTED,
    name: POPULAR,
    payload: url,
  };
};

export const setInitialMoviesState = () => {
  return {
    type: SET_INITIAL_MOVIES_STATE,
  };
};
