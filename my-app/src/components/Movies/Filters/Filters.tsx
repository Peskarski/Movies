import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core';
import { StyledSelect, StyledContainer } from './styles';
import { StyledButton } from '../../Dashboard/styles';
import { getGenresUrl } from '../../../API';
import i18n from 'i18next';
import { getGenresRequested, genres } from '../store';
import { useTranslation } from 'react-i18next';
import { FilteredMoviesList } from '../../Movies/FilteredMoviesList/FilteredMoviesList';

export const Filters: React.FC = () => {
  const lng = i18n.language;
  const path = getGenresUrl(lng);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const genresList = useSelector(genres);

  const [genre, setGenre] = useState('');
  const [toApplyFilter, setToApplyFilter] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setGenre(target.value);
    setToApplyFilter(false);
  };

  useEffect(() => {
    dispatch(getGenresRequested(path));
  }, [lng]);

  return (
    <div>
      <StyledContainer>
        <FormControl>
          <InputLabel id="demo-simple-select-label">{t('filters.genre')}</InputLabel>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            onChange={(e) => handleChange(e as React.ChangeEvent<HTMLSelectElement>)}
          >
            {genresList.map(({ name, id }: any) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <TextField
          id="date"
          label={t('filters.startDate')}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label={t('filters.endDate')}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <StyledButton onClick={() => setToApplyFilter(true)}>{t('filters.apply')}</StyledButton>
      </StyledContainer>
      {toApplyFilter && <FilteredMoviesList genre={genre} />}
    </div>
  );
};
