import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const StyledAppBar = styled(AppBar)({
  width: '70%',
  margin: 'auto',
  background: 'rgb(45, 140, 181)',
});

export const StyledTab = styled(Tab)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
});

export const StyledButton = styled(Button)({
  width: '40px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  background: 'rgb(45, 140, 181)',
});

export const StyledContainer = styled(Container)({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
});
