import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import i18n from 'i18next';
import { getFilteredMoviesRequested, filteredMovies } from '../store';
import { getMoviesUrl } from '../../../API';

type Props = {
  genre: string;
};

export const FilteredMoviesList: React.FC<Props> = ({ genre }) => {
  const dispatch = useDispatch();
  const movies = useSelector(filteredMovies);
  const lng = i18n.language;
  const path = getMoviesUrl(lng, genre);

  useEffect(() => {
    dispatch(getFilteredMoviesRequested(path));
  }, [genre]);

  return (
    <List>
      {movies.map(({ title, id }: any) => (
        <ListItem key={id}>{title}</ListItem>
      ))}
    </List>
  );
};
