import React from 'react';
import { StyledAppBar, StyledTab, StyledButton, StyledContainer } from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

type language = {
  name: string;
  value: string;
};

const navTabs: string[] = ['navBar.dashboard', 'navBar.movies', 'navBar.randomMovie'];
const languages: language[] = [
  { name: 'EN', value: 'en' },
  { name: 'RU', value: 'ru' },
];

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
        {languages.map(({ name, value }) => (
          <StyledButton onClick={() => i18n.changeLanguage(value)}>{name}</StyledButton>
        ))}
      </ButtonGroup>
    </StyledContainer>
  );
};
