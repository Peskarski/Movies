export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const GET_GENRES_ERROR = 'GET_GENRES_ERROR';
export const GET_GENRES_REQUESTED = 'GET_GENRES_REQUESTED';
export const GET_FILTERED_MOVIES_SUCCESS = 'GET_FILTERED_MOVIES_SUCCESS';
export const GET_FILTERED_MOVIES_ERROR = 'GET_FILTERED_MOVIES_ERROR';
export const GET_FILTERED_MOVIES_REQUESTED = 'GET_FILTERED_MOVIES_REQUESTED';
export const GET_TOTAL_PAGES = 'GET_TOTAL_PAGES';
export const GET_CURRENT_COUNTRY_SUCCESS = 'GET_CURRENT_COUNTRY_SUCCESS';
export const GET_CURRENT_COUNTRY_ERROR = 'GET_CURRENT_COUNTRY_ERROR';
export const GET_CURRENT_COUNTRY_REQUESTED = 'GET_CURRENT_COUNTRY_REQUESTED';
export const GET_PROVIDERS_SUCCESS = 'GET_PROVIDERS_SUCCESS';
export const GET_PROVIDERS_ERROR = 'GET_PROVIDERS_ERROR';
export const GET_PROVIDERS_REQUESTED = 'GET_PROVIDERS_REQUESTED';

export const getGenresSuccess = (genres: []) => {
  return {
    type: GET_GENRES_SUCCESS,
    payload: genres,
  };
};

export const getGenresError = (error: Error) => {
  return {
    type: GET_GENRES_ERROR,
    payload: error,
  };
};

export const getGenresRequested = (url: string) => {
  return {
    type: GET_GENRES_REQUESTED,
    payload: url,
  };
};

export const getFilteredMoviesSuccess = (movies: []) => {
  return {
    type: GET_FILTERED_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const getFilteredMoviesError = (error: Error) => {
  return {
    type: GET_FILTERED_MOVIES_ERROR,
    payload: error,
  };
};

export const getFilteredMoviesRequested = (url: string) => {
  return {
    type: GET_FILTERED_MOVIES_REQUESTED,
    payload: url,
  };
};

export const getTotalPages = (totalPages: Number) => {
  return {
    type: GET_TOTAL_PAGES,
    payload: totalPages,
  };
};

export const getCurrentCountrySuccess = (countryCode: string) => {
  return {
    type: GET_CURRENT_COUNTRY_SUCCESS,
    payload: countryCode,
  };
};

export const getCurrentCountryError = (error: Error) => {
  return {
    type: GET_CURRENT_COUNTRY_ERROR,
    payload: error,
  };
};

export const getCurrentCountryRequested = (url: string) => {
  return {
    type: GET_CURRENT_COUNTRY_REQUESTED,
    payload: url,
  };
};

export const getProvidersSuccess = (providers: []) => {
  return {
    type: GET_PROVIDERS_SUCCESS,
    payload: providers,
  };
};

export const getProvidersError = (error: Error) => {
  return {
    type: GET_PROVIDERS_ERROR,
    payload: error,
  };
};

export const getProvidersRequested = (url: string) => {
  return {
    type: GET_PROVIDERS_REQUESTED,
    payload: url,
  };
};
