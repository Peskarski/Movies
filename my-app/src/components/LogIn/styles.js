import { Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledButton = styled(Button)({
  width: '80px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  background: 'rgb(45, 140, 181)',
});

export const StyledContainer = styled(Container)({
  width: '30%',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '40px auto 0px 150px',
});
