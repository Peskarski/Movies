import { put, takeEvery, SimpleEffect, PutEffectDescriptor } from 'redux-saga/effects';
import { GetListDetailsRequested } from './actions';
import { GET_LIST_DETAILS_REQUESTED, getListDetailsSuccess, getListDetailsError } from './actions';
import { GetListDetailsSuccess } from './actions';

export function* getListDetailsSaga({
  payload,
}: GetListDetailsRequested): Generator<
  Promise<Response> | SimpleEffect<'PUT', PutEffectDescriptor<GetListDetailsSuccess>>,
  void,
  any
> {
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
