import { combineReducers } from 'redux';
import { lists } from '../components/Dashboard/store';
import { movies } from '../components/Movies/store';

export default combineReducers({
  lists,
  movies,
});
