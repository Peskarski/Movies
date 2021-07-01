import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';
import { watchGenresSaga, watchFilteredMoviesSaga } from '../components/Movies/store';
import { watchRandomMovieSaga } from '../components/RandomMovie/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga(), watchGenresSaga(), watchFilteredMoviesSaga(), watchRandomMovieSaga()]);
}
