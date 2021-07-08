export const GET_REQUEST_TOKEN_SUCCESS = 'GET_REQUEST_TOKEN_SUCCESS';
export const GET_REQUEST_TOKEN_ERROR = 'GET_REQUEST_TOKEN_ERROR';
export const GET_REQUEST_TOKEN_REQUESTED = 'GET_REQUEST_TOKEN_REQUESTED';

export const getRequestTokenSuccess = (tokenDetails: {}) => {
  return {
    type: GET_REQUEST_TOKEN_SUCCESS,
    payload: tokenDetails,
  };
};

export const getRequestTokenError = (error: Error) => {
  return {
    type: GET_REQUEST_TOKEN_ERROR,
    payload: error,
  };
};

export const getRequestTokenRequested = (url: string) => {
  return {
    type: GET_REQUEST_TOKEN_REQUESTED,
    payload: url,
  };
};
