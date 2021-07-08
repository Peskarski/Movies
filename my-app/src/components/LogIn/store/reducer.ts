import { GET_REQUEST_TOKEN_ERROR, GET_REQUEST_TOKEN_REQUESTED, GET_REQUEST_TOKEN_SUCCESS } from './actions';

export const initialLogInState = {
  requestToken: {
    tokenDetails: {},
    status: null,
    error: null,
  },
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const logIn = (state = initialLogInState, action: any) => {
  switch (action.type) {
    case GET_REQUEST_TOKEN_REQUESTED:
      return {
        ...state,
        requestToken: {
          tokenDetails: {},
          status: Status.Requested,
          error: null,
        },
      };

    case GET_REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        requestToken: {
          tokenDetails: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_REQUEST_TOKEN_ERROR:
      return {
        ...state,
        requestToken: {
          tokenDetails: {},
          status: Status.Error,
          error: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
