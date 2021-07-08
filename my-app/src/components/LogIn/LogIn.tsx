import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { StyledButton, StyledContainer } from './styles';

export const LogIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <TextField id="outlined-basic" label={t('logIn.username')} variant="outlined" />
      <TextField id="outlined-basic" label={t('logIn.password')} variant="outlined" />
      <StyledButton>{t('logIn.logIn')}</StyledButton>
    </StyledContainer>
  );
};
