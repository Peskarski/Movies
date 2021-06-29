import React from 'react';
import { StyledButton, StyledContainer } from './styles';
import { useTranslation } from 'react-i18next';
import { ListNames } from '../../API';
import { useHistory } from 'react-router';

const dashBoardButtons: { name: string; redirectPath: string }[] = [
  { name: 'dashboard.nowPlaying', redirectPath: ListNames.NOW_PLAYING_REQUEST_PATH },
  { name: 'dashboard.upcoming', redirectPath: ListNames.UPCOMING_REQUEST_PATH },
  { name: 'dashboard.popular', redirectPath: ListNames.POPULAR_REQUEST_PATH },
];

export const Dashboard: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <StyledContainer>
        {dashBoardButtons.map(({ name, redirectPath }) => (
          <StyledButton key={name} onClick={() => history.push(redirectPath)}>
            {t(name)}
          </StyledButton>
        ))}
      </StyledContainer>
    </>
  );
};
