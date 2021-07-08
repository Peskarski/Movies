import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { StyledButton, StyledContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestTokenRequested } from './store';
import { getRequestTokenUrl } from '../../API';

export const LogIn: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const path = getRequestTokenUrl();

  useEffect(() => {
    dispatch(getRequestTokenRequested(path));
  }, []);

  return (
    <StyledContainer>
      <TextField id="outlined-basic" label={t('logIn.username')} variant="outlined" />
      <TextField id="outlined-basic" label={t('logIn.password')} variant="outlined" />
      <StyledButton>{t('logIn.logIn')}</StyledButton>
    </StyledContainer>
  );
};
