import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  getCreatedListsError,
  getCreatedListsSuccess,
  GET_CREATED_LISTS_REQUESTED,
  CREATE_LIST,
  DELETE_LIST,
  getCreatedListStatus,
  getDeletedListStatus,
  ADD_MOVIE_TO_LIST,
  getAddedMovieStatus,
  REMOVE_MOVIE_FROM_LIST,
  getRemovedMovieStatus,
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
    const data = yield fetch(payload.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload.listData),
    });
    const response = yield data.json();
    yield put(getCreatedListStatus(response));
  } catch (error) {
    yield put(getCreatedListStatus(error));
  }
}

export function* watchCreateListSaga() {
  yield takeEvery(CREATE_LIST, createListSaga);
}

export function* deleteListSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload, {
      method: 'DELETE',
    });
    const response = yield data.json();
    yield put(getDeletedListStatus(response));
  } catch (error) {
    yield put(getDeletedListStatus(error));
  }
}

export function* watchDeleteListSaga() {
  yield takeEvery(DELETE_LIST, deleteListSaga);
}

export function* addMovieToListSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ media_id: payload.movieID }),
    });
    const response = yield data.json();
    yield put(getAddedMovieStatus(response));
  } catch (error) {
    yield put(getAddedMovieStatus(error));
  }
}

export function* watchAddMovieToListSaga() {
  yield takeEvery(ADD_MOVIE_TO_LIST, addMovieToListSaga);
}

export function* removeMovieFromListSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ media_id: payload.movieID }),
    });
    const response = yield data.json();
    yield put(getRemovedMovieStatus(response));
  } catch (error) {
    yield put(getRemovedMovieStatus(error));
  }
}

export function* watchRemoveMovieFromListSaga() {
  yield takeEvery(REMOVE_MOVIE_FROM_LIST, removeMovieFromListSaga);
}
