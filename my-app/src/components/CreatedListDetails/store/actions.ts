import { ListDetails } from './types';

export const GET_LIST_DETAILS_SUCCESS = 'GET_LIST_DETAILS_SUCCESS';
export interface GetListDetailsSuccess {
  type: typeof GET_LIST_DETAILS_SUCCESS;
  payload: ListDetails;
}

export const GET_LIST_DETAILS_ERROR = 'GET_LIST_DETAILS_ERROR';
export interface GetListDetailsError {
  type: typeof GET_LIST_DETAILS_ERROR;
  payload: Error;
}

export const GET_LIST_DETAILS_REQUESTED = 'GET_LIST_DETAILS_REQUESTED';
export interface GetListDetailsRequested {
  type: typeof GET_LIST_DETAILS_REQUESTED;
  payload: string;
}

export type ListAction = GetListDetailsError | GetListDetailsRequested | GetListDetailsSuccess;

export const getListDetailsSuccess = (listDetails: ListDetails): GetListDetailsSuccess => {
  return {
    type: GET_LIST_DETAILS_SUCCESS,
    payload: listDetails,
  };
};

export const getListDetailsError = (error: Error): GetListDetailsError => {
  return {
    type: GET_LIST_DETAILS_ERROR,
    payload: error,
  };
};

export const getListDetailsRequested = (url: string): GetListDetailsRequested => {
  return {
    type: GET_LIST_DETAILS_REQUESTED,
    payload: url,
  };
};
