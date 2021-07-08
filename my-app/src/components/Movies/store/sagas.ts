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
} from './actions';

export function* getGenresSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    console.log('res');
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
