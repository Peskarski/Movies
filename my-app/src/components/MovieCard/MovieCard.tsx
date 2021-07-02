import React from 'react';
import { ListItemData } from '../Dashboard';
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { getPosterUrl } from '../../API';
import { useHistory } from 'react-router-dom';
import { StyledCard } from './styles';

export const MovieCard: React.FC<ListItemData> = ({ title, id, poster_path }) => {
  const posterSrc = getPosterUrl(poster_path);
  const history = useHistory();

  return (
    <StyledCard onClick={() => history.push(`/movie-details/${id}`)}>
      <CardActionArea>
        <CardMedia component="img" alt="Poster" image={posterSrc} />
        <CardContent>
          <h4>{title}</h4>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
