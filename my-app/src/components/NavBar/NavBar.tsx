import React from 'react';
import { StyledAppBar, StyledTab, StyledButton, StyledContainer } from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n/config';
import { useHistory } from 'react-router-dom';

const navTabs: string[] = ['navBar.dashboard', 'navBar.movies', 'navBar.randomMovie'];

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <Tabs aria-label="simple tabs example" centered variant="fullWidth">
          {navTabs.map((tab) => (
            <StyledTab
              label={t(tab)}
              key={String(Math.random())}
              onClick={() => history.push(`/${t(tab, { lng: 'en' })}`)}
            />
          ))}
        </Tabs>
      </StyledAppBar>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        {Object.values(Language).map((lng) => (
          <StyledButton key={String(Math.random())} onClick={() => i18n.changeLanguage(lng)}>
            {lng}
          </StyledButton>
        ))}
      </ButtonGroup>
    </StyledContainer>
  );
};
