import React from 'react';
import { useSelector } from 'react-redux';
import { recomendations } from '../store';
import { List, ListItem } from '@material-ui/core';
import { ListItemData } from '../../Dashboard';
import { useHistory } from 'react-router-dom';

export const RecomendationsList: React.FC = () => {
  const list = useSelector(recomendations);
  const history = useHistory();
  return (
    <List>
      {list.map(({ title, id }: ListItemData) => (
        <ListItem key={id} onClick={() => history.push(`/movie-details/${id}`)}>
          {title}
        </ListItem>
      ))}
    </List>
  );
};
