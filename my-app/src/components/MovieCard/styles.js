import { Card, Container, Popper } from '@material-ui/core';
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

export const StyledPopperContainer = styled(Container)({
  width: '200px',
  height: '30px',
  display: 'flex',
  justifyContent: 'space-around',
  background: 'rgba(10, 10, 10, 0.2)',
  borderRadius: '4px',
});

export const StyledPopper = styled(Popper)({
  position: 'relative',
  top: '30px !important',
});
