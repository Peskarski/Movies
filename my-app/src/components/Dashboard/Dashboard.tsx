import React from 'react';
import { StyledButton, StyledContainer } from './styles';
import { useTranslation } from 'react-i18next';
import { NOW_PLAYING_REQUEST_WORD, UPCOMING_REQUEST_WORD, POPULAR_REQUEST_WORD } from '../../API';
import { useHistory } from 'react-router';

const dashBoardButtons: { name: string; requestWord: string }[] = [
  { name: 'dashboard.nowPlaying', requestWord: NOW_PLAYING_REQUEST_WORD },
  { name: 'dashboard.upcoming', requestWord: UPCOMING_REQUEST_WORD },
  { name: 'dashboard.popular', requestWord: POPULAR_REQUEST_WORD },
];

export const Dashboard: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <StyledContainer>
        {dashBoardButtons.map(({ name, requestWord }) => (
          <StyledButton key={String(Math.random())} onClick={() => history.push(requestWord)}>
            {t(name)}
          </StyledButton>
        ))}
      </StyledContainer>
    </>
  );
};
