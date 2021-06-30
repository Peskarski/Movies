import React from 'react';
import { MovieInfoProps } from '../types';
import { StyledBox } from './styles';
import { useTranslation } from 'react-i18next';

export const MovieInfo: React.FC<MovieInfoProps> = ({
  budget,
  genres,
  production_countries,
  release_date,
  revenue,
  tagline,
}) => {
  const { t } = useTranslation();
  const genresLine = genres.map((genre) => genre.name).join(', ');
  const countriesLine = production_countries.map((country) => country.name).join(', ');
  const renderData = [
    {
      name: t('details.releaseDate'),
      value: release_date,
    },
    {
      name: t('details.tagline'),
      value: tagline,
    },
    {
      name: t('details.genre'),
      value: genresLine,
    },
    {
      name: t('details.country'),
      value: countriesLine,
    },
    {
      name: t('details.budget'),
      value: budget,
    },
    {
      name: t('details.revenue'),
      value: revenue,
    },
  ];

  return (
    <div>
      {renderData.map(({ name, value }) => (
        <StyledBox display="flex" justifyContent="space-between" key={name}>
          <p>{name}</p>
          <p>{value}</p>
        </StyledBox>
      ))}
    </div>
  );
};
