import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { getCreatedListsUrl, getAddMovieToListUrl, getRemoveMovieFromListUrl, getListDetailsUrl } from '../../../API';
import { StyledPopperContainer, StyledPopper } from './styles';
import { sessionID } from '../../LogIn/store';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { userLists, getCreatedListsRequested, addMovieToList, removeMovieFromList } from '../../CreatedLists/store';
import { MenuItemData, Popper } from '../types';

export const CardPopper: React.FC<Popper> = ({ anchorEl, movieID, isRenderedInUserList }) => {
  const dispatch = useDispatch();
  const language = i18n.language;
  const history = useHistory();
  const { t } = useTranslation();
  const session_id = useSelector(sessionID);
  const { list_id } = useParams<{ list_id: string }>();
  const isPopperOpened = Boolean(anchorEl);
  const lists = useSelector(userLists);
  const createdListsPath = getCreatedListsUrl(language, session_id);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement | null>(null);
  const isMenuOpened = Boolean(menuAnchorEl);

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
    const removeMoviePath = getRemoveMovieFromListUrl(session_id, list_id);
    const listDetailsPath = getListDetailsUrl(list_id, language);
    const removedMovieData = {
      removeMovieUrl: removeMoviePath,
      listDetailsUrl: listDetailsPath,
      movieID,
    };
    dispatch(removeMovieFromList(removedMovieData));
  };

  return (
    <>
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
    </>
  );
};
