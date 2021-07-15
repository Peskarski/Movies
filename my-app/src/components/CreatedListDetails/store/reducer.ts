import { GET_LIST_DETAILS_ERROR, GET_LIST_DETAILS_SUCCESS, GET_LIST_DETAILS_REQUESTED } from './actions';

export const initialListDetailsState = {
  details: {},
  status: null,
  error: null,
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const listDetails = (state = initialListDetailsState, action: any) => {
  switch (action.type) {
    case GET_LIST_DETAILS_REQUESTED:
      return {
        ...state,
        status: Status.Requested,
      };

    case GET_LIST_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        status: Status.Success,
      };

    case GET_LIST_DETAILS_ERROR:
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
