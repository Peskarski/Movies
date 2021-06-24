import { NavBar } from './components/NavBar';
import { StyledContainer } from './styles';
import './i18n/config';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <h1>{t('title')}</h1>
      <NavBar />
    </StyledContainer>
  );
};

export default App;
