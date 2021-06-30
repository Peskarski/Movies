import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';
<<<<<<< HEAD
import { watchGenresSaga, watchFilteredMoviesSaga } from '../components/Movies/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga(), watchGenresSaga(), watchFilteredMoviesSaga()]);
=======
import { watchMovieDetailsSaga } from '../components/MovieDetails/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga(), watchMovieDetailsSaga()]);
>>>>>>> added basic movieDetails feature
}
