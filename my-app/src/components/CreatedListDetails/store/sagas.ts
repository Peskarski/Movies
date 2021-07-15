import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { GET_LIST_DETAILS_REQUESTED, getListDetailsSuccess, getListDetailsError } from './actions';

export function* getListDetailsSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getListDetailsSuccess(result));
  } catch (error) {
    put(getListDetailsError(error));
  }
}

export function* watchListDetailsSaga() {
  yield takeEvery(GET_LIST_DETAILS_REQUESTED, getListDetailsSaga);
}
