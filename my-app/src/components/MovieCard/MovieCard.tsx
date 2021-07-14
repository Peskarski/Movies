import React from 'react';
import i18n from 'i18next';
import { ListItemData } from '../Dashboard';
import { CardContent, CardMedia, CardActionArea, IconButton, Menu, MenuItem } from '@material-ui/core';
import { getPosterUrl } from '../../API';
import { useHistory } from 'react-router-dom';
import { StyledCard, StyledPopperContainer, StyledPopper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { sessionID } from '../LogIn/store';
import AddIcon from '@material-ui/icons/Add';
import { userLists } from '../CreatedLists/store';
import { getCreatedListsRequested } from '../CreatedLists/store';
import { getCreatedListsUrl } from '../../API';

type MenuItemType = {
  name: string;
  id: string;
};

export const MovieCard: React.FC<ListItemData> = ({ title, id, poster_path }) => {
  const dispatch = useDispatch();
  const posterSrc = getPosterUrl(poster_path);
  const history = useHistory();
  const session_id = useSelector(sessionID);
  const lists = useSelector(userLists);
  const language = i18n.language;
  const createdListsPath = getCreatedListsUrl(language, session_id);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement | null>(null);
  const isMenuOpened = Boolean(menuAnchorEl);

  const openPopper = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (!lists.length) {
      dispatch(getCreatedListsRequested(createdListsPath));
    }
    setMenuAnchorEl(e.currentTarget);
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setMenuAnchorEl(null);
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
                <IconButton color="secondary" onClick={openMenu}>
                  <AddIcon />
                  <Menu open={isMenuOpened} anchorEl={menuAnchorEl} onClose={closeMenu}>
                    {lists.map(({ name, id }: MenuItemType) => (
                      <MenuItem key={id} onClick={closeMenu}>
                        {name}
                      </MenuItem>
                    ))}
                  </Menu>
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
