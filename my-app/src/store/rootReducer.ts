import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
import { movieDetails } from '../components/MovieDetails/store';

export default combineReducers({
  lists,
  movieDetails,
});
