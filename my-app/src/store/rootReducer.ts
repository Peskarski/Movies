import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
import { movies } from '../components/Movies/store';
import { movieDetails } from '../components/MovieDetails/store';
import { random } from '../components/RandomMovie/store';
import { logIn } from '../components/LogIn/store';

export default combineReducers({
  lists,
  movies,
  movieDetails,
  random,
  logIn,
});
