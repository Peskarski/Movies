import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';

export default function* rootSaga() {
  yield all([watchMoviesSaga()]);
}
