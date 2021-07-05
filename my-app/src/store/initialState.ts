import { initialListsState } from '../components/Dashboard/store';
import { initialMoviesState } from '../components/Movies/store';
import { initialMovieDetailsState } from '../components/MovieDetails/store';
import { initialRandomMovieState } from '../components/RandomMovie/store';

export const initialState = {
  initialListsState,
  initialMoviesState,
  initialMovieDetailsState,
  initialRandomMovieState,
} as any;
