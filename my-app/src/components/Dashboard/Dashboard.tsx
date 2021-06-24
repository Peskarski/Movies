import React from 'react';
import { StyledButton, StyledContainer } from './styles';
import { useTranslation } from 'react-i18next';
import { MoviesList } from './MoviesList';

const dashBoardButtons: string[] = ['dashboard.nowPlaying', 'dashboard.upcoming', 'dashboard.popular'];

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledContainer>
        {dashBoardButtons.map((name) => (
          <StyledButton key={String(Math.random())}>{t(name)}</StyledButton>
        ))}
      </StyledContainer>
      <MoviesList />
    </>
  );
};
