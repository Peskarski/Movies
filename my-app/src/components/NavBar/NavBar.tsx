import React, { useState, useEffect } from 'react';
import { StyledAppBar, StyledTab, StyledButton, StyledContainer, StyledLogInButton, StyledPersonIcon } from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n/config';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sessionID } from '../LogIn/store';

const navTabs: string[] = ['navBar.dashboard', 'navBar.movies', 'navBar.randomMovie'];

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(0);
  const isUserLoggedIn: boolean = useSelector(sessionID);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <StyledContainer>
      {!isUserLoggedIn && (
        <StyledLogInButton onClick={() => history.push(`/login`)}>{t('navBar.logIn')}</StyledLogInButton>
      )}
      <StyledAppBar position="static">
        <Tabs
          aria-label="simple tabs example"
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { background: 'black' },
          }}
        >
          {navTabs.map((tab) => (
            <StyledTab
              label={t(tab)}
              key={String(Math.random())}
              onClick={() => history.push(`/${t(tab, { lng: 'en' })}/`)}
            />
          ))}
          {isUserLoggedIn && <StyledTab label={t('navBar.lists')} onClick={() => history.push(`/lists/`)} />}
        </Tabs>
      </StyledAppBar>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        {Object.values(Language).map((lng) => (
          <StyledButton key={String(Math.random())} onClick={() => i18n.changeLanguage(lng)}>
            {lng}
          </StyledButton>
        ))}
      </ButtonGroup>
      {isUserLoggedIn && <StyledPersonIcon fontSize="large" />}
    </StyledContainer>
  );
};
