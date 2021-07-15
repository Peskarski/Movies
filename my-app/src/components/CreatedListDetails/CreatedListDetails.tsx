import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { getListDetailsRequested, moviesFromList, listName } from './store';
import { getListDetailsUrl } from '../../API';
import { ListItemData } from '../Dashboard';
import { MovieCard } from '../MovieCard';
import { StyledList } from './styles';
import { lastRemovedMovie } from '../CreatedLists/store';

export const CreatedListDetails: React.FC = () => {
  const dispatch = useDispatch();
  const language = i18n.language;
  const { list_id } = useParams<{ list_id: string }>();
  const path = getListDetailsUrl(list_id, language);
  const movies = useSelector(moviesFromList);
  const name = useSelector(listName);
  const removedMovie = useSelector(lastRemovedMovie);

  useEffect(() => {
    dispatch(getListDetailsRequested(path));
  }, [dispatch, path, removedMovie]);

  return (
    <div>
      <h1>{name}</h1>
      {movies && (
        <StyledList>
          {movies.map(({ title, id, poster_path }: ListItemData) => (
            <MovieCard title={title} movieID={id} poster_path={poster_path} key={id} isRenderedInUserList />
          ))}
        </StyledList>
      )}
    </div>
  );
};
