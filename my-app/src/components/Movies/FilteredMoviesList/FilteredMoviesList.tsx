import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { filteredMovies } from '../store';

export const FilteredMoviesList: React.FC = () => {
  const movies = useSelector(filteredMovies);

  return (
    <List>
      {movies.map(({ title, id }: any) => (
        <ListItem key={id}>{title}</ListItem>
      ))}
    </List>
  );
};
