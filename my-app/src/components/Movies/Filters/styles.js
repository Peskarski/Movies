import { Container, Select } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledSelect = styled(Select)({
  width: '140px',
  fontSize: '14px',
  color: 'black',
  margin: '8px',
});

export const StyledContainer = styled(Container)({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '8px',
});
