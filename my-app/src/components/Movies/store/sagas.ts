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
} from './actions';

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
    console.log(payload);
    const data = yield fetch(payload);
    const result = yield data.json();
    console.log(result);
    yield put(getCurrentCountrySuccess(result.country_code));
  } catch (error) {
    put(getCurrentCountryError(error));
  }
}

export function* watchCurrentCountrySaga() {
  yield takeEvery(GET_CURRENT_COUNTRY_REQUESTED, getCurrentCountrySaga);
}
