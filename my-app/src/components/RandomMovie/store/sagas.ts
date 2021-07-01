import { put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { getRandomMovieError, getRandomMovieSuccess, GET_RANDOM_MOVIE_REQUESTED, getTotalPages } from './actions';
import { getRandomMovie } from '../utils';

export function* getRandomMovieSaga({ payload }: AnyAction): any {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    const movie = yield getRandomMovie(result.results);
    yield put(getRandomMovieSuccess(movie));
    yield put(getTotalPages(result.total_pages));
  } catch (error) {
    put(getRandomMovieError(error));
  }
}

export function* watchRandomMovieSaga() {
  yield takeEvery(GET_RANDOM_MOVIE_REQUESTED, getRandomMovieSaga);
}
