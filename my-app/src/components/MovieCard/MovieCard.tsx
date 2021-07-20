import React from 'react';
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { getPosterUrl } from '../../API';
import { useHistory } from 'react-router-dom';
import { StyledCard } from './styles';
import { MovieCardData } from './types';
import { CardPopper } from './CardPopper';

export const MovieCard: React.FC<MovieCardData> = ({ title, movieID, posterPath, isRenderedInUserList }) => {
  const posterSrc = getPosterUrl(posterPath);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const openPopper = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledCard onMouseEnter={openPopper} onMouseLeave={closePopper}>
        <CardActionArea
          onClick={(e) => {
            history.push(`/movie-details/${movieID}`);
          }}
        >
          <CardPopper anchorEl={anchorEl} movieID={movieID} isRenderedInUserList={isRenderedInUserList} />
          <CardMedia component="img" alt="Poster" image={posterSrc} />
          <CardContent>
            <h4>{title}</h4>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </>
  );
};
