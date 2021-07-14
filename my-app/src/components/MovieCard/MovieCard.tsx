import React from 'react';
import { ListItemData } from '../Dashboard';
import { CardContent, CardMedia, CardActionArea, Popper, IconButton } from '@material-ui/core';
import { getPosterUrl } from '../../API';
import { useHistory } from 'react-router-dom';
import { StyledCard, StyledPopperContainer, StyledPopper } from './styles';
import { useSelector } from 'react-redux';
import { sessionID } from '../LogIn/store';
import AddIcon from '@material-ui/icons/Add';

export const MovieCard: React.FC<ListItemData> = ({ title, id, poster_path }) => {
  const posterSrc = getPosterUrl(poster_path);
  const history = useHistory();
  const session_id = useSelector(sessionID);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

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
            history.push(`/movie-details/${id}`);
          }}
        >
          {session_id && (
            <StyledPopper open={open} anchorEl={anchorEl} placement="top">
              <StyledPopperContainer
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <IconButton color="secondary" onClick={() => console.log(id)}>
                  <AddIcon />
                </IconButton>
              </StyledPopperContainer>
            </StyledPopper>
          )}
          <CardMedia component="img" alt="Poster" image={posterSrc} />
          <CardContent>
            <h4>{title}</h4>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </>
  );
};
