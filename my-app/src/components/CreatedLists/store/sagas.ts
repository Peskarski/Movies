import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  getCreatedListsError,
  getCreatedListsSuccess,
  GET_CREATED_LISTS_REQUESTED,
  CREATE_LIST,
  DELETE_LIST,
} from './actions';

export function* getCreatedListsSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getCreatedListsSuccess(result.results));
  } catch (error) {
    put(getCreatedListsError(error));
  }
}

export function* watchCreatedListsSaga() {
  yield takeEvery(GET_CREATED_LISTS_REQUESTED, getCreatedListsSaga);
}

export function* createListSaga({ payload }: AnyAction): any {
  try {
    yield fetch(payload.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload.listData),
    });
  } catch (error) {
    console.error(error);
  }
}

export function* watchCreateListSaga() {
  yield takeEvery(CREATE_LIST, createListSaga);
}

export function* deleteListSaga({ payload }: AnyAction): any {
  try {
    yield fetch(payload, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
}

export function* watchDeleteListSaga() {
  yield takeEvery(DELETE_LIST, deleteListSaga);
}
