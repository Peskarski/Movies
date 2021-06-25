import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  nowPlaying,
  popular,
  upcoming,
  getNowPlayingRequested,
  getPopularRequested,
  getUpcomingRequested,
} from '../store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getListUrl, NOW_PLAYING_REQUEST_WORD, UPCOMING_REQUEST_WORD, POPULAR_REQUEST_WORD } from '../../../API';

const listsStoreData = {
  [NOW_PLAYING_REQUEST_WORD]: {
    selector: nowPlaying,
    action: getNowPlayingRequested,
  },
  [UPCOMING_REQUEST_WORD]: {
    selector: upcoming,
    action: getUpcomingRequested,
  },
  [POPULAR_REQUEST_WORD]: {
    selector: popular,
    action: getPopularRequested,
  },
};

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useParams<{ list: string }>();
  const movies = useSelector(listsStoreData[list as keyof typeof listsStoreData].selector);

  useEffect(() => {
    const path = getListUrl('en', list);
    dispatch(listsStoreData[list as keyof typeof listsStoreData].action(path));
  }, [list]);

  return (
    <List>
      {movies.map(({ original_title }: any) => (
        <ListItem key={String(Math.random())}>{original_title}</ListItem>
      ))}
    </List>
  );
};
