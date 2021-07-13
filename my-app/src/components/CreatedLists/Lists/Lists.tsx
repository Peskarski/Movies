import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLists, deleteList } from '../store';
import { sessionID } from '../../LogIn/store';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { ListItemType } from '../types';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteListUrl } from '../../../API';

export const Lists: React.FC = () => {
  const lists = useSelector(userLists);
  const dispatch = useDispatch();
  const id = useSelector(sessionID);

  const handleDeleteListClick = (listID: string) => {
    const path = deleteListUrl(id, listID);
    dispatch(deleteList(path));
  };

  return (
    <List>
      {lists.map(({ name, id }: ListItemType) => (
        <ListItem key={id}>
          <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <IconButton>
              <DeleteIcon onClick={() => handleDeleteListClick(id)} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
