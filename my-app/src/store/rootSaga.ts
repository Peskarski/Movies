import { all } from 'redux-saga/effects';
import { watchNowPlayingSaga } from '../components/Dashboard/store';

export default function* rootSaga() {
  yield all([watchNowPlayingSaga()]);
}
