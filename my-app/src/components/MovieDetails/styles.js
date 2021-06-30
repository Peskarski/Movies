import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledContainer = styled(Container)({
  width: '70%',
  '& img': {
    width: '300px',
    height: '420px',
  },
});
