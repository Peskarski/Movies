import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
<<<<<<< HEAD
import { movies } from '../components/Movies/store';

export default combineReducers({
  lists,
  movies,
=======
import { movieDetails } from '../components/MovieDetails/store';

export default combineReducers({
  lists,
  movieDetails,
>>>>>>> added basic movieDetails feature
});
