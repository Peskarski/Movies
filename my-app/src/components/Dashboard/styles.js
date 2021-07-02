import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

export const StyledButton = styled(Button)({
  width: '140px',
  fontSize: '14px',
  color: 'black',
  background: 'rgb(45, 140, 181)',
  margin: '8px',
  '&:hover': {
    background: 'white',
  },
});

export const StyledContainer = styled(Container)({
  width: '40%',
  display: 'flex',
  flexWrap: 'nowrap',
});

export const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
});
