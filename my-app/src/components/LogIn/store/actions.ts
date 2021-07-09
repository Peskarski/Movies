export const GET_REQUEST_TOKEN_SUCCESS = 'GET_REQUEST_TOKEN_SUCCESS';
export const GET_REQUEST_TOKEN_ERROR = 'GET_REQUEST_TOKEN_ERROR';
export const GET_REQUEST_TOKEN_REQUESTED = 'GET_REQUEST_TOKEN_REQUESTED';
export const GET_SESSION_ID_SUCCESS = 'GET_SESSION_ID_SUCCESS';
export const GET_SESSION_ID_ERROR = 'GET_SESSION_ID_ERROR';
export const GET_SESSION_ID_REQUESTED = 'GET_SESSION_ID_REQUESTED';

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

export const getSessionIDSuccess = (tokenDetails: {}) => {
  return {
    type: GET_SESSION_ID_SUCCESS,
    payload: tokenDetails,
  };
};

export const getSessionIDError = (error: Error) => {
  return {
    type: GET_SESSION_ID_ERROR,
    payload: error,
  };
};

export const getSessionIDRequested = (url: string, body: {}) => {
  return {
    type: GET_SESSION_ID_REQUESTED,
    payload: { url, body },
  };
};
