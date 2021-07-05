import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import {
  getMovieDetailsError,
  getMovieDetailsSuccess,
  GET_MOVIE_DETAILS_REQUESTED,
  getRecomendationsError,
  getRecomendationsSuccess,
  GET_RECOMENDATIONS_REQUESTED,
} from './actions';

export function* getMovieDetailsSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getMovieDetailsSuccess(result));
  } catch (error) {
    put(getMovieDetailsError(error));
  }
}

export function* watchMovieDetailsSaga() {
  yield takeEvery(GET_MOVIE_DETAILS_REQUESTED, getMovieDetailsSaga);
}

const recomendationsListLength = 6;

export function* getRecomendationsSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getRecomendationsSuccess(result.results.slice(0, recomendationsListLength)));
  } catch (error) {
    put(getRecomendationsError(error));
  }
}

export function* watchRecomendationsSaga() {
  yield takeEvery(GET_RECOMENDATIONS_REQUESTED, getRecomendationsSaga);
}
