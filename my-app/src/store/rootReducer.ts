import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
import { movies } from '../components/Movies/store';
<<<<<<< HEAD
import { movieDetails } from '../components/MovieDetails/store';
=======
import { random } from '../components/RandomMovie/store';
>>>>>>> added random movie feature

export default combineReducers({
  lists,
  movies,
<<<<<<< HEAD
  movieDetails,
=======
  random,
>>>>>>> added random movie feature
});
