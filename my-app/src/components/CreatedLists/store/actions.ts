export const GET_CREATED_LISTS_SUCCESS = 'GET_CREATED_LISTS_SUCCESS';
export const GET_CREATED_LISTS_ERROR = 'GET_CREATED_LISTS_ERROR';
export const GET_CREATED_LISTS_REQUESTED = 'GET_CREATED_LISTS_REQUESTED';
export const CREATE_LIST = 'CREATE_LIST';
export const GET_CREATED_LIST_STATUS = 'GET_CREATED_LIST_STATUS';
export const DELETE_LIST = 'DELETE_LIST';
export const GET_DELETED_LIST_STATUS = 'GET_DELETED_LIST_STATUS';

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
