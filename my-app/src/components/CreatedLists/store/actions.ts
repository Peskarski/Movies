export const GET_CREATED_LISTS_SUCCESS = 'GET_CREATED_LISTS_SUCCESS';
export const GET_CREATED_LISTS_ERROR = 'GET_CREATED_LISTS_ERROR';
export const GET_CREATED_LISTS_REQUESTED = 'GET_CREATED_LISTS_REQUESTED';
export const CREATE_LIST = 'CREATE_LIST';
export const GET_CREATED_LIST_STATUS = 'GET_CREATED_LIST_STATUS';
export const DELETE_LIST = 'DELETE_LIST';
export const GET_DELETED_LIST_STATUS = 'GET_DELETED_LIST_STATUS';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const GET_ADDED_MOVIE_STATUS = 'GET_ADDED_MOVIE_STATUS';
export const REMOVE_MOVIE_FROM_LIST = 'REMOVE_MOVIE_FROM_LIST';
export const GET_REMOVED_MOVIE_STATUS = 'GET_REMOVED_MOVIE_STATUS';

export const getCreatedListsSuccess = (createdLists: []) => {
  return {
    type: GET_CREATED_LISTS_SUCCESS,
    payload: createdLists,
  };
};

export const getCreatedListsError = (error: Error) => {
  return {
    type: GET_CREATED_LISTS_ERROR,
    payload: error,
  };
};

export const getCreatedListsRequested = (url: string) => {
  return {
    type: GET_CREATED_LISTS_REQUESTED,
    payload: url,
  };
};

export const createList = (postData: {}) => {
  return {
    type: CREATE_LIST,
    payload: postData,
  };
};

export const getCreatedListStatus = (createdList: {}) => {
  return {
    type: GET_CREATED_LIST_STATUS,
    payload: createdList,
  };
};

export const deleteList = (url: string) => {
  return {
    type: DELETE_LIST,
    payload: url,
  };
};

export const getDeletedListStatus = (deletedList: {}) => {
  return {
    type: GET_DELETED_LIST_STATUS,
    payload: deletedList,
  };
};

export const addMovieToList = (addMovieData: {}) => {
  return {
    type: ADD_MOVIE_TO_LIST,
    payload: addMovieData,
  };
};

export const getAddedMovieStatus = (addedMovie: {}) => {
  return {
    type: GET_ADDED_MOVIE_STATUS,
    payload: addedMovie,
  };
};

export const removeMovieFromList = (removedMovieData: {}) => {
  return {
    type: REMOVE_MOVIE_FROM_LIST,
    payload: removedMovieData,
  };
};

export const getRemovedMovieStatus = (removedMovie: {}) => {
  return {
    type: GET_REMOVED_MOVIE_STATUS,
    payload: removedMovie,
  };
};
