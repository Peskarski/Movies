import { GET_LIST_DETAILS_ERROR, GET_LIST_DETAILS_SUCCESS, GET_LIST_DETAILS_REQUESTED } from './actions';
import { Status } from '../../../store/types';
import { ListAction } from './types';

export const initialListDetailsState = {
  details: {},
  status: null,
  error: null,
};

export const listDetails = (state = initialListDetailsState, action: ListAction) => {
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
