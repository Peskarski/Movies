import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { StyledButton, StyledContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestTokenRequested, requestToken, getSessionIDRequested } from './store';
import { getRequestTokenUrl, getPermissionUrl, getSessionIDUrl } from '../../API';
import { useParams } from 'react-router-dom';

export const LogIn: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const reqToken = useSelector(requestToken);
  const requestTokenPath = getRequestTokenUrl();
  const permissionPath = getPermissionUrl(reqToken);
  const { request_token } = useParams<any>();
  const sessionIDPath = getSessionIDUrl(request_token);

  useEffect(() => {
    dispatch(getRequestTokenRequested(requestTokenPath));
  }, []);

  const handleLogInClick = () => {
    dispatch(getSessionIDRequested(sessionIDPath, JSON.stringify({ request_token })));
  };

  return (
    <StyledContainer>
      <TextField id="outlined-basic" label={t('logIn.username')} variant="outlined" />
      <TextField id="outlined-basic" label={t('logIn.password')} variant="outlined" />
      <StyledButton onClick={handleLogInClick}>{t('logIn.logIn')}</StyledButton>
      <a href={permissionPath}>Link</a>
    </StyledContainer>
  );
};
