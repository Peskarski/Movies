import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  getGenresError,
  getGenresSuccess,
  GET_GENRES_REQUESTED,
  getFilteredMoviesError,
  getFilteredMoviesSuccess,
  GET_FILTERED_MOVIES_REQUESTED,
  getTotalPages,
  getCurrentCountryError,
  getCurrentCountrySuccess,
  GET_CURRENT_COUNTRY_REQUESTED,
  getProvidersError,
  getProvidersSuccess,
  GET_PROVIDERS_REQUESTED,
} from './actions';
import { CountryCode } from './types';

const DEFAULT_COUNTRY_CODE = 'US';

export function* getGenresSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getGenresSuccess(result.genres));
  } catch (error) {
    put(getGenresError(error));
  }
}

export function* watchGenresSaga() {
  yield takeEvery(GET_GENRES_REQUESTED, getGenresSaga);
}

export function* getFilteredMoviesSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getFilteredMoviesSuccess(result.results));
    yield put(getTotalPages(result.total_pages));
  } catch (error) {
    put(getFilteredMoviesError(error));
  }
}

export function* watchFilteredMoviesSaga() {
  yield takeEvery(GET_FILTERED_MOVIES_REQUESTED, getFilteredMoviesSaga);
}

export function* getCurrentCountrySaga({ payload }: AnyAction): any {
  try {
    const availableCountriesData = yield fetch(payload.availableCountriesUrl);
    const availableCountriesResult = yield availableCountriesData.json();
    const availableCountries = availableCountriesResult.results.map(({ iso_3166_1 }: CountryCode) => iso_3166_1);

    const currentCountryData = yield fetch(payload.currentCountryUrl);
    const currentCountryResult = yield currentCountryData.json();
    const { country_code } = currentCountryResult;

    availableCountries.includes(country_code)
      ? yield put(getCurrentCountrySuccess(country_code))
      : yield put(getCurrentCountrySuccess(DEFAULT_COUNTRY_CODE));
  } catch (error) {
    put(getCurrentCountryError(error));
  }
}

export function* watchCurrentCountrySaga() {
  yield takeEvery(GET_CURRENT_COUNTRY_REQUESTED, getCurrentCountrySaga);
}

export function* getProvidersSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getProvidersSuccess(result.results));
  } catch (error) {
    put(getProvidersError(error));
  }
}

export function* watchProvidersSaga() {
  yield takeEvery(GET_PROVIDERS_REQUESTED, getProvidersSaga);
}
