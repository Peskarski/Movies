import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import i18n from 'i18next';
import { getFilteredMoviesRequested, filteredMovies } from '../store';
import { getMoviesUrl } from '../../../API';
import { FilteredMoviesListProps, MoviesPagination } from '../';
import { StyledContainer } from './styles';
import { useHistory } from 'react-router-dom';

const DEFAULT_PAGE = 1;

export const FilteredMoviesList: React.FC<FilteredMoviesListProps> = ({ genre, startDate, endDate }) => {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const dispatch = useDispatch();
  const movies = useSelector(filteredMovies);
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
  );
};
