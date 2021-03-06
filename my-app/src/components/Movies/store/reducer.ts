import {
  GET_GENRES_ERROR,
  GET_GENRES_SUCCESS,
  GET_GENRES_REQUESTED,
  GET_FILTERED_MOVIES_REQUESTED,
  GET_FILTERED_MOVIES_ERROR,
  GET_FILTERED_MOVIES_SUCCESS,
  GET_TOTAL_PAGES,
  GET_CURRENT_COUNTRY_ERROR,
  GET_CURRENT_COUNTRY_REQUESTED,
  GET_CURRENT_COUNTRY_SUCCESS,
  GET_PROVIDERS_ERROR,
  GET_PROVIDERS_REQUESTED,
  GET_PROVIDERS_SUCCESS,
} from './actions';
import { Status } from '../../../store/types';

export const initialMoviesState = {
  genres: {
    genresList: [],
    status: null,
    error: null,
  },
  filteredMovies: {
    movies: [],
    status: null,
    error: null,
    totalPages: 0,
  },
  totalPages: 0,
  currentCountry: {
    code: null,
    status: null,
    error: null,
  },
  providers: {
    providers: [],
    status: null,
    error: null,
  },
};

export const movies = (state = initialMoviesState, action: any) => {
  switch (action.type) {
    case GET_GENRES_REQUESTED:
      return {
        ...state,
        genres: {
          genresList: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: {
          genresList: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_GENRES_ERROR:
      return {
        ...state,
        genres: {
          genresList: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_FILTERED_MOVIES_REQUESTED:
      return {
        ...state,
        filteredMovies: {
          movies: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_SUCCESS:
      return {
        ...state,
        filteredMovies: {
          movies: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_ERROR:
      return {
        ...state,
        filteredMovies: {
          movies: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    case GET_CURRENT_COUNTRY_REQUESTED:
      return {
        ...state,
        currentCountry: {
          code: null,
          status: Status.Requested,
          error: null,
        },
      };

    case GET_CURRENT_COUNTRY_SUCCESS:
      return {
        ...state,
        currentCountry: {
          code: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_CURRENT_COUNTRY_ERROR:
      return {
        ...state,
        currentCountry: {
          code: null,
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_PROVIDERS_REQUESTED:
      return {
        ...state,
        providers: {
          providers: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: {
          providers: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_PROVIDERS_ERROR:
      return {
        ...state,
        providers: {
          providers: null,
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
