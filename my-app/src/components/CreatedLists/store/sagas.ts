import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { getCreatedListsError, getCreatedListsSuccess, GET_CREATED_LISTS_REQUESTED } from './actions';

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
