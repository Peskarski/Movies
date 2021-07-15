import {
  GET_CREATED_LISTS_ERROR,
  GET_CREATED_LISTS_SUCCESS,
  GET_CREATED_LISTS_REQUESTED,
  GET_CREATED_LIST_STATUS,
  GET_DELETED_LIST_STATUS,
  GET_ADDED_MOVIE_STATUS,
} from './actions';

export const initialCreatedListsState = {
  lists: [],
  status: null,
  error: null,
  lastCreatedList: {},
  lastDeletedList: {},
  lastAddedMovie: {},
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const createdLists = (state = initialCreatedListsState, action: any) => {
  switch (action.type) {
    case GET_CREATED_LISTS_REQUESTED:
      return {
        ...state,
        status: Status.Requested,
      };

    case GET_CREATED_LISTS_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        status: Status.Success,
      };

    case GET_CREATED_LISTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_CREATED_LIST_STATUS:
      return {
        ...state,
        lastCreatedList: action.payload,
      };

    case GET_DELETED_LIST_STATUS:
      return {
        ...state,
        lastDeletedList: action.payload,
      };

    case GET_ADDED_MOVIE_STATUS:
      return {
        ...state,
        lastAddedMovie: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
