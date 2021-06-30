import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';
import { watchMovieDetailsSaga } from '../components/MovieDetails/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga(), watchMovieDetailsSaga()]);
}
