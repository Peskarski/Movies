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
import { getListUrl, ListNames } from '../../../API';
import i18n from 'i18next';
import { ListItemData } from '../';
import { MovieCard } from '../../MovieCard';
import { StyledList } from '../styles';

const listsStoreData = {
  [ListNames.NOW_PLAYING_REQUEST_PATH]: {
    selector: nowPlaying,
    action: getNowPlayingRequested,
  },
  [ListNames.UPCOMING_REQUEST_PATH]: {
    selector: upcoming,
    action: getUpcomingRequested,
  },
  [ListNames.POPULAR_REQUEST_PATH]: {
    selector: popular,
    action: getPopularRequested,
  },
};

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useParams<{ list: keyof typeof listsStoreData }>();
  const movies = useSelector(listsStoreData[list].selector);
  const language = i18n.language;
  const path = getListUrl(language, list);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(listsStoreData[list].action(path));
    }
  }, [list, dispatch, movies.length, path]);

  useEffect(() => {
    dispatch(setInitialMoviesState());
  }, [language, dispatch]);

  return (
    <StyledList>
      {movies.map(({ title, id, poster_path }: ListItemData) => (
        <MovieCard title={title} movieID={id} posterPath={poster_path} key={id} />
      ))}
    </StyledList>
  );
};
