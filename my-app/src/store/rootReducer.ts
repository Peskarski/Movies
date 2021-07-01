import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
import { movies } from '../components/Movies/store';
import { random } from '../components/RandomMovie/store';

export default combineReducers({
  lists,
  movies,
  random,
});
