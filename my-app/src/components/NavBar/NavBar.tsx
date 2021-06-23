import React from 'react';
import { StyledAppBar, StyledTab, StyledButton, StyledContainer } from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';

const navTabs: string[] = ['Dashboard', 'Movies', 'Random Movie'];
const languages: string[] = ['EN', 'RU'];

export const NavBar: React.FC = () => {
  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <Tabs aria-label="simple tabs example" centered variant="fullWidth">
          {navTabs.map((tab) => (
            <StyledTab label={tab} key={String(Math.random())} />
          ))}
        </Tabs>
      </StyledAppBar>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        {languages.map((lang) => (
          <StyledButton>{lang}</StyledButton>
        ))}
      </ButtonGroup>
    </StyledContainer>
  );
};
