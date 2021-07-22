import { Container, Popper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

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
