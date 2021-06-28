export const GET_GENRES_SUCCESS = 'ADD_GENRES_SUCCESS';
export const GET_GENRES_ERROR = 'ADD_GENRES_ERROR';
export const GET_GENRES_REQUESTED = 'ADD_GENRES_REQUESTED';

export const getGenresSuccess = (genres: []) => {
  return {
    type: GET_GENRES_SUCCESS,
    payload: genres,
  };
};

export const getGenresError = (error: Error) => {
  return {
    type: GET_GENRES_ERROR,
    payload: error,
  };
};

export const getGenresRequested = (url: string) => {
  return {
    type: GET_GENRES_REQUESTED,
    payload: url,
  };
};
