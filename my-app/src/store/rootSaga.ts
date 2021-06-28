import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';
import { watchGenresSaga } from '../components/Movies/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga(), watchGenresSaga()]);
}
