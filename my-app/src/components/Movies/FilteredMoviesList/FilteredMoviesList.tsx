import React from 'react';
import { useSelector } from 'react-redux';
import { filteredMovies } from '../store';
import { StyledList } from './styles';
import { MovieCard } from '../../MovieCard';
import { ListItemData } from '../../Dashboard';

export const FilteredMoviesList: React.FC = () => {
  const movies = useSelector(filteredMovies);

  return (
    <StyledList>
      {movies.map(({ title, id, poster_path }: ListItemData) => (
        <MovieCard title={title} movieID={id} posterPath={poster_path} key={id} />
      ))}
    </StyledList>
  );
};
