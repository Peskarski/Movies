import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core';
import { StyledSelect, StyledContainer } from './styles';
import { StyledButton } from '../../Dashboard/styles';
import { getGenresUrl, getCurrentCountryUrl, getProvidersUrl, getAvailableCountriesUrl } from '../../../API';
import i18n from 'i18next';
import {
  getGenresRequested,
  genres,
  getCurrentCountryRequested,
  getProvidersRequested,
  currentCountryCode,
  providers,
} from '../store';
import { useTranslation } from 'react-i18next';
import { FilterItemData, ProviderData } from '../';
import { FiltersProps } from '../types';

const DEFAULT_FILTERS_VALUE = '';

export const Filters: React.FC<FiltersProps> = ({ onAplied }) => {
  const language = i18n.language;
  const genresPath = getGenresUrl(language);
  const currentCountryPath = getCurrentCountryUrl();
  const availableCountriesPath = getAvailableCountriesUrl();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const genresList = useSelector(genres);
  const providersList = useSelector(providers);
  const countryCode = useSelector(currentCountryCode);
  const providersPath = getProvidersUrl(language, countryCode);

  const [genre, setGenre] = useState(DEFAULT_FILTERS_VALUE);
  const [provider, setProvider] = useState<string[]>([]);
  const [startDate, setStartDate] = useState(DEFAULT_FILTERS_VALUE);
  const [endDate, setEndDate] = useState(DEFAULT_FILTERS_VALUE);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setGenre(target.value);
  };

  const handleProviderChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setProvider(e.target.value as string[]);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEndDate(e.target.value);
  };

  useEffect(() => {
    dispatch(getGenresRequested(genresPath));
  }, [dispatch, genresPath]);

  useEffect(() => {
    dispatch(
      getCurrentCountryRequested({
        currentCountryUrl: currentCountryPath,
        availableCountriesUrl: availableCountriesPath,
      })
    );
  }, [dispatch, currentCountryPath, availableCountriesPath]);

  useEffect(() => {
    dispatch(getProvidersRequested(providersPath));
  }, [dispatch, providersPath]);

  return (
    <StyledContainer>
      <FormControl>
        <InputLabel id="genre-select-label">{t('filters.genre')}</InputLabel>
        <StyledSelect
          labelId="genre-select-label"
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
      <FormControl>
        <InputLabel id="providers-select-label">{t('filters.providers')}</InputLabel>
        <StyledSelect
          labelId="providers-select-label"
          value={provider}
          multiple
          onChange={(e) => handleProviderChange(e as React.ChangeEvent<HTMLSelectElement>)}
        >
          {providersList.map(({ provider_name, provider_id }: ProviderData) => (
            <MenuItem key={provider_id} value={provider_id}>
              {provider_name}
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
      <StyledButton onClick={() => onAplied(genre, startDate, endDate, provider, countryCode)}>
        {t('filters.apply')}
      </StyledButton>
    </StyledContainer>
  );
};
