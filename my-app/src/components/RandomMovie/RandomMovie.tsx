import React, { useState, useEffect } from 'react';
import { Filters } from '../Movies';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesUrl } from '../../API';
import i18n from 'i18next';
import { getRandomMovieRequested, randomMovie, totalPagesForRandom } from './store';
import { getRandomPage } from './utils';
import { MovieCard } from '../MovieCard';

const DEFAULT_PAGE = 1;
const DEFAULT_FILTERS_VALUE = '';

export const RandomMovie: React.FC = () => {
  const language = i18n.language;
  const [page, setPage] = useState(DEFAULT_PAGE);
  const dispatch = useDispatch();
  const totalPages = useSelector(totalPagesForRandom);
  const { title, id, poster_path } = useSelector(randomMovie);

  const [genre, setGenre] = useState(DEFAULT_FILTERS_VALUE);
  const [provider, setProvider] = useState<string[]>([]);
  const [region, setRegion] = useState(DEFAULT_FILTERS_VALUE);
  const [startDate, setStartDate] = useState(DEFAULT_FILTERS_VALUE);
  const [endDate, setEndDate] = useState(DEFAULT_FILTERS_VALUE);

  const path = getMoviesUrl(language, genre, startDate, endDate, page, region, provider);

  const applyFilterParams = (genre: string, startDate: string, endDate: string, provider: string[], region: string) => {
    setGenre(genre);
    setStartDate(startDate);
    setEndDate(endDate);
    setPage(getRandomPage(totalPages));
    setProvider(provider);
    setRegion(region);
  };

  useEffect(() => {
    dispatch(getRandomMovieRequested(path));
  }, [dispatch, path]);

  return (
    <div>
      <Filters onAplied={applyFilterParams} />
      <MovieCard title={title} movieID={id} posterPath={poster_path} />
    </div>
  );
};
