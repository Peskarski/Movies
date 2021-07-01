import React from 'react';
import { MovieInfoProps } from '../types';
import { StyledBox } from './styles';
import { useTranslation } from 'react-i18next';
import { arrayToString, numberToMoney } from './utils';

export const MovieInfo: React.FC<MovieInfoProps> = ({
  budget,
  genres,
  production_countries,
  release_date,
  revenue,
  tagline,
}) => {
  const { t } = useTranslation();
  const genresLine = arrayToString(genres);
  const countriesLine = arrayToString(production_countries);
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
      value: numberToMoney(budget),
    },
    {
      name: t('details.revenue'),
      value: numberToMoney(revenue),
    },
  ];

  return (
    <div>
      {renderData.map(({ name, value }) =>
        value ? (
          <StyledBox key={name}>
            <p className="name">{name}</p>
            <p className="value">{value}</p>
          </StyledBox>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
