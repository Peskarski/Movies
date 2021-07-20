import { Card } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledCard = styled(Card)({
  width: '200px',
  maxHeight: '380px',
  margin: ' 20px 40px',
  '& :hover': {
    backgroundColor: 'rgb(107, 100, 100)',
    color: 'white',
  },
  '& img': {
    maxHeight: '300px',
  },
});
