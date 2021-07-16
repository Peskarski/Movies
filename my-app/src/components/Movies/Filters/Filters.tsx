import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core';
import { StyledSelect, StyledContainer } from './styles';
import { StyledButton } from '../../Dashboard/styles';
import { getGenresUrl, getCurrentCountryUrl } from '../../../API';
import i18n from 'i18next';
import { getGenresRequested, genres, getCurrentCountryRequested } from '../store';
import { useTranslation } from 'react-i18next';
import { FilterItemData } from '../';
import { FiltersProps } from '../types';

const DEFAULT_FILTERS_VALUE = '';

export const Filters: React.FC<FiltersProps> = ({ onAplied }) => {
  const language = i18n.language;
  const genresPath = getGenresUrl(language);
  const currentCountryPath = getCurrentCountryUrl();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const genresList = useSelector(genres);

  const [genre, setGenre] = useState(DEFAULT_FILTERS_VALUE);
  const [startDate, setStartDate] = useState(DEFAULT_FILTERS_VALUE);
  const [endDate, setEndDate] = useState(DEFAULT_FILTERS_VALUE);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setGenre(target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEndDate(e.target.value);
  };

  useEffect(() => {
    dispatch(getGenresRequested(genresPath));
    dispatch(getCurrentCountryRequested(currentCountryPath));
  }, [dispatch, genresPath, currentCountryPath]);

  return (
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
      <StyledButton onClick={() => onAplied(genre, startDate, endDate)}>{t('filters.apply')}</StyledButton>
    </StyledContainer>
  );
};
