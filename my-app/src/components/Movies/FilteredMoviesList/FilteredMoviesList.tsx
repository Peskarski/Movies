import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
<<<<<<< HEAD
import i18n from 'i18next';
import { getFilteredMoviesRequested, filteredMovies } from '../store';
import { getMoviesUrl } from '../../../API';
import { FilteredMoviesListProps, MoviesPagination } from '../';
import { StyledContainer } from './styles';
import { useHistory } from 'react-router-dom';
=======
import { filteredMovies } from '../store';
>>>>>>> changed filters logic
=======
import { filteredMovies } from '../store';
import { StyledList } from './styles';
import { MovieCard } from '../../MovieCard';
import { ListItemData } from '../../Dashboard';
>>>>>>> created movie card and applied it

export const FilteredMoviesList: React.FC = () => {
  const movies = useSelector(filteredMovies);
<<<<<<< HEAD
  const language = i18n.language;
  const path = getMoviesUrl(language, genre, startDate, endDate, page);
  const history = useHistory();

  useEffect(() => {
    dispatch(getFilteredMoviesRequested(path));
  }, [genre, dispatch, path]);

  return (
    <>
      <StyledContainer>
        <MoviesPagination changePage={(page) => setPage(page)} />
      </StyledContainer>
      <List>
        {movies.map(({ title, id }: any) => (
          <ListItem key={id} onClick={() => history.push(`/movie-details/${id}`)}>
            {title}
          </ListItem>
        ))}
      </List>
    </>
=======

  return (
    <StyledList>
      {movies.map(({ title, id, poster_path }: ListItemData) => (
        <MovieCard title={title} id={id} poster_path={poster_path} key={id} />
      ))}
<<<<<<< HEAD
    </List>
>>>>>>> changed filters logic
=======
    </StyledList>
>>>>>>> created movie card and applied it
  );
};
