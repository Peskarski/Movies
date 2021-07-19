import { ListDetails } from './types';
export const GET_LIST_DETAILS_SUCCESS = 'GET_LIST_DETAILS_SUCCESS';
export const GET_LIST_DETAILS_ERROR = 'GET_LIST_DETAILS_ERROR';
export const GET_LIST_DETAILS_REQUESTED = 'GET_LIST_DETAILS_REQUESTED';

export const getListDetailsSuccess = (listDetails: ListDetails) => {
  return {
    type: GET_LIST_DETAILS_SUCCESS,
    payload: listDetails,
  };
};

export const getListDetailsError = (error: Error) => {
  return {
    type: GET_LIST_DETAILS_ERROR,
    payload: error,
  };
};

export const getListDetailsRequested = (url: string) => {
  return {
    type: GET_LIST_DETAILS_REQUESTED,
    payload: url,
  };
};
