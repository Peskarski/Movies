export const GET_CREATED_LISTS_SUCCESS = 'GET_CREATED_LISTS_SUCCESS';
export const GET_CREATED_LISTS_ERROR = 'GET_CREATED_LISTS_ERROR';
export const GET_CREATED_LISTS_REQUESTED = 'GET_CREATED_LISTS_REQUESTED';
export const CREATE_LIST = 'CREATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

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

export const deleteList = (url: string) => {
  return {
    type: DELETE_LIST,
    payload: url,
  };
};
