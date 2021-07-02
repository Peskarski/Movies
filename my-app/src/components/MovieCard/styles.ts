import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';

export const StyledCard = styled(Card)({
  width: '200px',
  maxHeight: '380px',
  margin: ' 20px 40px',
  '& :hover': {
    backgroundColor: 'grey',
    color: 'white',
  },
  '& img': {
    height: '300px',
  },
});
