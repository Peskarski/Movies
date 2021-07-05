import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledPagination = styled(Pagination)({
  '& button': {
    background: 'rgb(45, 140, 181)',
    '&:hover': {
      background: 'white',
    },
  },
  '& .Mui-selected': {
    border: '2px solid black',
    fontWeight: 'bold',
    background: 'rgb(45, 140, 181)',
  },
});

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '8px',
});
