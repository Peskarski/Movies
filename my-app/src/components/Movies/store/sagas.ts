import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { getGenresError, getGenresSuccess, GET_GENRES_REQUESTED } from './actions';

export function* getGenresSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(getGenresSuccess(result.genres));
  } catch (error) {
    put(getGenresError(error));
  }
}

export function* watchGenresSaga() {
  yield takeEvery(GET_GENRES_REQUESTED, getGenresSaga);
}
