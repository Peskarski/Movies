import { GET_CREATED_LISTS_ERROR, GET_CREATED_LISTS_SUCCESS, GET_CREATED_LISTS_REQUESTED } from './actions';

export const initialCreatedListsState = {
  lists: [],
  status: null,
  error: null,
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

    default:
      return {
        ...state,
      };
  }
};
