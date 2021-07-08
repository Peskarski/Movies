import { initialListsState } from '../components/Dashboard/store';
import { initialMoviesState } from '../components/Movies/store';
import { initialMovieDetailsState } from '../components/MovieDetails/store';
import { initialRandomMovieState } from '../components/RandomMovie/store';
import { initialLogInState } from '../components/LogIn/store';

export const initialState = {
  lists: initialListsState,
  movies: initialMoviesState,
  movieDetails: initialMovieDetailsState,
  random: initialRandomMovieState,
  logIn: initialLogInState,
} as any;
