import { List, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledList = styled(List)({
  width: '60%',
  margin: 'auto',
});

export const StyledContainer = styled(Container)({
  height: '80px',
  width: '94%',
  marginTop: '8px',
  borderRadius: '4px',
  '& span': {
    fontSize: '20px',
  },
  '&:hover': {
    background: 'rgb(232, 232, 232)',
    cursor: 'pointer',
    '& span': {
      fontWeight: 'bold',
    },
  },
});
