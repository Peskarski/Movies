import { all } from 'redux-saga/effects';
import { watchMoviesSaga } from '../components/Dashboard/store';
import { watchGenresSaga, watchFilteredMoviesSaga } from '../components/Movies/store';
import { watchMovieDetailsSaga, watchRecomendationsSaga } from '../components/MovieDetails/store';
import { watchRandomMovieSaga } from '../components/RandomMovie/store';
import { watchRequestTokenSaga, watchSessionIDSaga } from '../components/LogIn/store';
import {
  watchCreatedListsSaga,
  watchCreateListSaga,
  watchDeleteListSaga,
  watchAddMovieToListSaga,
} from '../components/CreatedLists/store';
import { watchListDetailsSaga } from '../components/CreatedListDetails/store';

export default function* rootSaga() {
  yield all([
    watchMoviesSaga(),
    watchGenresSaga(),
    watchFilteredMoviesSaga(),
    watchMovieDetailsSaga(),
    watchRecomendationsSaga(),
    watchRandomMovieSaga(),
    watchRequestTokenSaga(),
    watchSessionIDSaga(),
    watchCreatedListsSaga(),
    watchCreateListSaga(),
    watchDeleteListSaga(),
    watchAddMovieToListSaga(),
    watchListDetailsSaga(),
  ]);
}
