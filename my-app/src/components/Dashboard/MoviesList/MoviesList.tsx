import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useHistory } from 'react-router-dom';
import { nowPlaying, getNowPlayingRequested } from '../store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getListUrl } from '../../../API';

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector(nowPlaying);

  useEffect(() => {
    const path = getListUrl('en', 'now_playing');
    console.log(path);
    dispatch(getNowPlayingRequested(path));
  }, []);

  return (
    <List>
      {movies.map(({ original_title }: any) => (
        <ListItem>{original_title}</ListItem>
      ))}
    </List>
  );
};
