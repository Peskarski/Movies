import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import {
  getNowPlayingSuccess,
  getNowPlayingError,
  getPopularSuccess,
  getPopularError,
  getUpcomingSuccess,
  getUpcomingError,
  GET_MOVIES_REQUESTED,
  NOW_PLAYING,
  POPULAR,
  UPCOMING,
} from './actions';

const actionsByNames = {
  [NOW_PLAYING]: {
    success: getNowPlayingSuccess,
    error: getNowPlayingError,
  },
  [POPULAR]: {
    success: getPopularSuccess,
    error: getPopularError,
  },
  [UPCOMING]: {
    success: getUpcomingSuccess,
    error: getUpcomingError,
  },
};

const maxListLength = 5;

export function* getMoviesSaga({ payload, name }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(actionsByNames[name as keyof typeof actionsByNames].success(result.results.slice(0, maxListLength)));
  } catch (error) {
    put(actionsByNames[name as keyof typeof actionsByNames].error(error));
  }
}

export function* watchMoviesSaga() {
  yield takeEvery(GET_MOVIES_REQUESTED, getMoviesSaga);
}
