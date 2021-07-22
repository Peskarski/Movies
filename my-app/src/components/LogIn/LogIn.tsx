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
  const requestTokenPath = getRequestTokenUrl();
  const permissionPath = getPermissionUrl(token);
  const { request_token } = useParams<any>();
  const sessionIDPath = getSessionIDUrl(request_token);
  const session_id = useSelector(sessionID);

  useEffect(() => {
    dispatch(getRequestTokenRequested(requestTokenPath));
    return () => {
      localStorage.setItem('session_id', session_id);
    };
  }, [dispatch, session_id, requestTokenPath]);

  useEffect(() => {
    if (request_token) {
      dispatch(getSessionIDRequested(sessionIDPath, JSON.stringify({ request_token })));
    }
  }, [dispatch, request_token, sessionIDPath]);

  return (
    <StyledContainer>
      {session_id ? <p>{t('logIn.isLogged')}</p> : <Link href={permissionPath}>{t('logIn.logInLink')}</Link>}
    </StyledContainer>
  );
};
