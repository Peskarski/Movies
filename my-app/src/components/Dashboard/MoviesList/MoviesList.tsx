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
  setInitialMoviesState,
} from '../store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getListUrl, NOW_PLAYING_REQUEST_WORD, UPCOMING_REQUEST_WORD, POPULAR_REQUEST_WORD } from '../../../API';
import i18n from 'i18next';

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
  const lng = i18n.language;
  const path = getListUrl(lng, list);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(listsStoreData[list as keyof typeof listsStoreData].action(path));
    }
  }, [list]);

  useEffect(() => {
    dispatch(setInitialMoviesState());
    dispatch(listsStoreData[list as keyof typeof listsStoreData].action(path));
  }, [lng]);

  return (
    <List>
      {movies.map(({ title }: any) => (
        <ListItem key={String(Math.random())}>{title}</ListItem>
      ))}
    </List>
  );
};
