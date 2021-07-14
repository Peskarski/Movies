import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  getRequestTokenError,
  getRequestTokenSuccess,
  GET_REQUEST_TOKEN_REQUESTED,
  getSessionIDError,
  getSessionIDSuccess,
  GET_SESSION_ID_REQUESTED,
} from './actions';

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

export function* getSessionIDSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload.url, {
      method: 'POST',
      body: payload.body,
    });
    const result = yield data.json();
    yield put(getSessionIDSuccess(result));
  } catch (error) {
    put(getSessionIDError(error));
  }
}

export function* watchSessionIDSaga() {
  yield takeEvery(GET_SESSION_ID_REQUESTED, getSessionIDSaga);
}
