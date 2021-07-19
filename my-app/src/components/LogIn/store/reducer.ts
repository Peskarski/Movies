import {
  GET_REQUEST_TOKEN_ERROR,
  GET_REQUEST_TOKEN_REQUESTED,
  GET_REQUEST_TOKEN_SUCCESS,
  GET_SESSION_ID_ERROR,
  GET_SESSION_ID_REQUESTED,
  GET_SESSION_ID_SUCCESS,
} from './actions';
import { Status } from '../../../store/types';

export const initialLogInState = {
  requestToken: {
    tokenDetails: {},
    status: null,
    error: null,
  },
  sessionID: {
    tokenDetails: {
      session_id: localStorage.getItem('session_id'),
    },
    status: null,
    error: null,
  },
};

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

    case GET_SESSION_ID_REQUESTED:
      return {
        ...state,
        sessionID: {
          tokenDetails: {},
          status: Status.Requested,
          error: null,
        },
      };

    case GET_SESSION_ID_SUCCESS:
      return {
        ...state,
        sessionID: {
          tokenDetails: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_SESSION_ID_ERROR:
      return {
        ...state,
        sessionID: {
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
