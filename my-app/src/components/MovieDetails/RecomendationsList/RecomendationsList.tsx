import React from 'react';
import { useSelector } from 'react-redux';
import { recomendations } from '../store';
import { ListItemData } from '../../Dashboard';
import { MovieCard } from '../../MovieCard';
import { StyledList } from './styles';

export const RecomendationsList: React.FC = () => {
  const list = useSelector(recomendations);
  return (
    <StyledList>
      {list.map(({ title, id, poster_path }: ListItemData) => (
        <MovieCard title={title} movieID={id} posterPath={poster_path} key={id} />
      ))}
    </StyledList>
  );
};
