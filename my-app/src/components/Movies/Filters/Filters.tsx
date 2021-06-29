import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core';
import { StyledSelect, StyledContainer } from './styles';
import { StyledButton } from '../../Dashboard/styles';
import { getGenresUrl } from '../../../API';
import i18n from 'i18next';
import { getGenresRequested, genres } from '../store';
import { useTranslation } from 'react-i18next';
import { FilteredMoviesList, FilterItemData } from '../';

const DEFAULT_FILTERS_VALUE = '';

export const Filters: React.FC = () => {
  const language = i18n.language;
  const path = getGenresUrl(language);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const genresList = useSelector(genres);

  const [genre, setGenre] = useState(DEFAULT_FILTERS_VALUE);
  const [startDate, setStartDate] = useState(DEFAULT_FILTERS_VALUE);
  const [endDate, setEndDate] = useState(DEFAULT_FILTERS_VALUE);
  const [toApplyFilter, setToApplyFilter] = useState(false);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setGenre(target.value);
    setToApplyFilter(false);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStartDate(e.target.value);
    setToApplyFilter(false);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEndDate(e.target.value);
    setToApplyFilter(false);
  };

  useEffect(() => {
    dispatch(getGenresRequested(path));
  }, [dispatch, path]);

  return (
    <div>
      <StyledContainer>
        <FormControl>
          <InputLabel id="demo-simple-select-label">{t('filters.genre')}</InputLabel>
          <StyledSelect
            labelId="demo-simple-select-label"
            value={genre}
            onChange={(e) => handleGenreChange(e as React.ChangeEvent<HTMLSelectElement>)}
          >
            {genresList.map(({ name, id }: FilterItemData) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <TextField
          label={t('filters.startDate')}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleStartDateChange}
          value={startDate}
        />
        <TextField
          label={t('filters.endDate')}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleEndDateChange}
          value={endDate}
        />
        <StyledButton onClick={() => setToApplyFilter(true)}>{t('filters.apply')}</StyledButton>
      </StyledContainer>
      {toApplyFilter && <FilteredMoviesList genre={genre} startDate={startDate} endDate={endDate} />}
    </div>
  );
};
