import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { getNowPlayingSuccess, getNowPlayingError, GET_NOW_PLAYING_REQUESTED } from './actions';

export function* getNowPlayingSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getNowPlayingSuccess(result.results));
  } catch (error) {
    put(getNowPlayingError(error));
  }
}

export function* watchNowPlayingSaga() {
  yield takeEvery(GET_NOW_PLAYING_REQUESTED, getNowPlayingSaga);
}
