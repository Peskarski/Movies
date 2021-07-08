import React, { useState, useEffect } from 'react';
import { Filters, MoviesPagination, FilteredMoviesList } from './';
import { useDispatch } from 'react-redux';
import { getMoviesUrl } from '../../API';
import i18n from 'i18next';
import { getFilteredMoviesRequested } from './store';

const DEFAULT_PAGE = 1;
const DEFAULT_FILTERS_VALUE = '';

export const Movies: React.FC = () => {
  const language = i18n.language;
  const [page, setPage] = useState(DEFAULT_PAGE);
  const dispatch = useDispatch();

  const [genre, setGenre] = useState(DEFAULT_FILTERS_VALUE);
  const [startDate, setStartDate] = useState(DEFAULT_FILTERS_VALUE);
  const [endDate, setEndDate] = useState(DEFAULT_FILTERS_VALUE);

  const path = getMoviesUrl(language, genre, startDate, endDate, page);
  console.log(path);

  const applyFilterParams = (genre: string, startDate: string, endDate: string) => {
    setGenre(genre);
    setStartDate(startDate);
    setEndDate(endDate);
    setPage(DEFAULT_PAGE);
  };

  useEffect(() => {
    dispatch(getFilteredMoviesRequested(path));
  }, [dispatch, path]);

  return (
    <div>
      <Filters onAplied={applyFilterParams} />
      <MoviesPagination changePage={(page) => setPage(page)} page={page} />
      <FilteredMoviesList />
    </div>
  );
};
