import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@material-ui/core';
import { StyledContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestTokenRequested, requestToken, getSessionIDRequested, sessionID } from './store';
import { getRequestTokenUrl, getPermissionUrl, getSessionIDUrl } from '../../API';
import { useParams } from 'react-router-dom';

export const LogIn: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(requestToken);
  const isUserLoggedIn: boolean = useSelector(sessionID);
  const requestTokenPath = getRequestTokenUrl();
  const permissionPath = getPermissionUrl(token);
  const { request_token } = useParams<any>();
  const sessionIDPath = getSessionIDUrl(request_token);

  useEffect(() => {
    dispatch(getRequestTokenRequested(requestTokenPath));
  }, []);

  useEffect(() => {
    if (request_token) {
      dispatch(getSessionIDRequested(sessionIDPath, JSON.stringify({ request_token })));
    }
  }, [dispatch, request_token, sessionIDPath]);

  return (
    <StyledContainer>
      {isUserLoggedIn ? <p>{t('logIn.isLogged')}</p> : <Link href={permissionPath}>{t('logIn.logInLink')}</Link>}
    </StyledContainer>
  );
};
