import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, TextField } from '@material-ui/core';
import { StyledSelect, StyledContainer } from './styles';
import { getGenresUrl } from '../../../API';
import i18n from 'i18next';
import { getGenresRequested, genres } from '../store';
import { useTranslation } from 'react-i18next';

export const Filters: React.FC = () => {
  const lng = i18n.language;
  const path = getGenresUrl(lng);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const genresList = useSelector(genres);

  useEffect(() => {
    dispatch(getGenresRequested(path));
  }, [lng]);

  return (
    <StyledContainer>
      <FormControl>
        <InputLabel id="demo-simple-select-label">{t('genres.genre')}</InputLabel>
        <StyledSelect labelId="demo-simple-select-label" id="demo-simple-select" defaultValue="">
          {genresList.map(({ name, id }: any) => (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="End Date"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </StyledContainer>
  );
};
