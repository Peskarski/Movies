import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { CardContent, CardMedia, CardActionArea, IconButton, Menu, MenuItem } from '@material-ui/core';
import { getPosterUrl, getCreatedListsUrl, getAddMovieToListUrl, getRemoveMovieFromListUrl } from '../../API';
import { useHistory, useParams } from 'react-router-dom';
import { StyledCard, StyledPopperContainer, StyledPopper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { sessionID } from '../LogIn/store';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { userLists, getCreatedListsRequested, addMovieToList, removeMovieFromList } from '../CreatedLists/store';
import { MenuItemData, MovieCardData } from './types';

export const MovieCard: React.FC<MovieCardData> = ({ title, movieID, poster_path, isRenderedInUserList }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const posterSrc = getPosterUrl(poster_path);
  const history = useHistory();
  const session_id = useSelector(sessionID);
  const lists = useSelector(userLists);
  const language = i18n.language;
  const { list_id } = useParams<{ list_id: string }>();
  const createdListsPath = getCreatedListsUrl(language, session_id);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isPopperOpened = Boolean(anchorEl);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement | null>(null);
  const isMenuOpened = Boolean(menuAnchorEl);

  const openPopper = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  const openLists = (e: React.MouseEvent<HTMLElement>) => {
    if (!lists.length) {
      dispatch(getCreatedListsRequested(createdListsPath));
    }
    setMenuAnchorEl(e.currentTarget);
  };

  const closeLists = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setMenuAnchorEl(null);
  };

  const handleAddMovieToListClick = (listID: string) => {
    const path = getAddMovieToListUrl(session_id, listID);
    const addMovieData = {
      url: path,
      movieID,
    };
    dispatch(addMovieToList(addMovieData));
  };

  const handleRemoveMovieFromListClick = () => {
    const path = getRemoveMovieFromListUrl(session_id, list_id);
    const removedMovie = {
      url: path,
      movieID,
    };
    dispatch(removeMovieFromList(removedMovie));
  };

  return (
    <>
      <StyledCard onMouseEnter={openPopper} onMouseLeave={closePopper}>
        <CardActionArea
          onClick={(e) => {
            history.push(`/movie-details/${movieID}`);
          }}
        >
          {session_id && (
            <StyledPopper open={isPopperOpened} anchorEl={anchorEl} placement="top">
              <StyledPopperContainer
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <IconButton color="secondary" onClick={openLists}>
                  <AddIcon />
                  <Menu open={isMenuOpened} anchorEl={menuAnchorEl} onClose={closeLists}>
                    <MenuItem
                      onClick={() => {
                        history.push(`/lists/`);
                      }}
                    >
                      {t('lists.createList')}
                    </MenuItem>
                    {lists.map(({ name, id }: MenuItemData) => (
                      <MenuItem
                        key={id}
                        onClick={(e) => {
                          handleAddMovieToListClick(id);
                          closeLists(e);
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Menu>
                </IconButton>
                {isRenderedInUserList && (
                  <IconButton color="secondary" onClick={handleRemoveMovieFromListClick}>
                    <RemoveIcon />
                  </IconButton>
                )}
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
