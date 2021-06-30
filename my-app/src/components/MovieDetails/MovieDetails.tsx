import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { details, getMovieDetailsRequested } from './store';
import { getMovieDetailsUrl, getPosterUrl } from '../../API';
import { StyledContainer } from './styles';
import { Box } from '@material-ui/core';
import { MovieInfo } from './';

export const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { title, poster_path, budget, genres, overview, production_countries, release_date, revenue, tagline } =
    useSelector(details);

  const language = i18n.language;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const path = getMovieDetailsUrl(language, Number(id));
  const posterSrc = getPosterUrl(poster_path);

  useEffect(() => {
    dispatch(getMovieDetailsRequested(path));
  }, [dispatch, path]);

  return (
    <StyledContainer>
      <h2>{title}</h2>
      <Box display="flex" justifyContent="space-around">
        <img src={posterSrc} alt="Alt text" />
        {overview && (
          <MovieInfo
            budget={budget}
            genres={genres}
            production_countries={production_countries}
            release_date={release_date}
            revenue={revenue}
            tagline={tagline}
          />
        )}
      </Box>
      <h3>{t('details.overview')}</h3>
      <p>{overview}</p>
    </StyledContainer>
  );
};
