import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { getListDetailsRequested, moviesFromList, listName } from './store';
import { getListDetailsUrl } from '../../API';
import { ListItemData } from '../Dashboard';
import { MovieCard } from '../MovieCard';
import { StyledList } from './styles';

export const CreatedListDetails: React.FC = () => {
  const dispatch = useDispatch();
  const language = i18n.language;
  const listID = useParams<{ list_id: string }>().list_id;

  const path = getListDetailsUrl(listID, language);
  const movies = useSelector(moviesFromList);
  const name = useSelector(listName);

  useEffect(() => {
    dispatch(getListDetailsRequested(path));
  }, [dispatch, path]);

  return (
    <div>
      <h1>{name}</h1>
      {movies && (
        <StyledList>
          {movies.map(({ title, id, poster_path }: ListItemData) => (
            <MovieCard title={title} movieID={id} posterPath={poster_path} key={id} isRenderedInUserList />
          ))}
        </StyledList>
      )}
    </div>
  );
};
