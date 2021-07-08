import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { getRequestTokenError, getRequestTokenSuccess, GET_REQUEST_TOKEN_REQUESTED } from './actions';

export function* getRequestTokenSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getRequestTokenSuccess(result));
  } catch (error) {
    put(getRequestTokenError(error));
  }
}

export function* watchRequestTokenSaga() {
  yield takeEvery(GET_REQUEST_TOKEN_REQUESTED, getRequestTokenSaga);
}
