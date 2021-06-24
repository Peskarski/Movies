import React from 'react';
import { StyledAppBar, StyledTab, StyledButton, StyledContainer } from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n/config';

const navTabs: string[] = ['navBar.dashboard', 'navBar.movies', 'navBar.randomMovie'];

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <Tabs aria-label="simple tabs example" centered variant="fullWidth">
          {navTabs.map((tab) => (
            <StyledTab label={t(tab)} key={String(Math.random())} />
          ))}
        </Tabs>
      </StyledAppBar>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
<<<<<<< HEAD
        {Object.values(Language).map((lng) => (
          <StyledButton key={String(Math.random())} onClick={() => i18n.changeLanguage(lng)}>
            {lng}
=======
        {languages.map(({ name, value }) => (
          <StyledButton key={name + value} onClick={() => i18n.changeLanguage(value)}>
            {name}
>>>>>>> added dashboard component, installed redux, router
          </StyledButton>
        ))}
      </ButtonGroup>
    </StyledContainer>
  );
};
