import { styled } from '@material-ui/core/styles';
import { Container, Button, Input } from '@material-ui/core';

export const StyledContainer = styled(Container)({
  width: '64%',
  margin: '40px auto',
  display: 'flex',
  justifyContent: 'space-around',
});

export const StyledButton = styled(Button)({
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  background: 'rgb(45, 140, 181)',
});

export const StyledInput = styled(Input)({
  width: '30%',
});
