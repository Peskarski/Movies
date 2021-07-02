import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledBox = styled(Box)({
  width: '420px',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  '& .name': {
    color: 'grey',
    width: '120px',
    textAlign: 'left',
    marginLeft: '20px',
  },
  '& .value': {
    width: '300px',
    textAlign: 'left',
  },
});
