import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLists, deleteList } from '../store';
import { sessionID } from '../../LogIn/store';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { StyledList, StyledContainer } from './styles';
import { ListItemType } from '../types';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteListUrl } from '../../../API';

export const Lists: React.FC = () => {
  const lists = useSelector(userLists);
  const dispatch = useDispatch();
  const id = useSelector(sessionID);
  const history = useHistory();

  const handleDeleteListClick = (listID: string) => {
    const path = deleteListUrl(id, listID);
    dispatch(deleteList(path));
  };

  return (
    <StyledList>
      {lists.map(({ name, description, id }: ListItemType) => (
        <StyledContainer key={id} onClick={() => history.push(`${id}`)}>
          <ListItem>
            <ListItemText primary={name} secondary={description} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteListClick(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </StyledContainer>
      ))}
    </StyledList>
  );
};
