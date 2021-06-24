import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { StyledContainer } from './styles';
import './i18n/config';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer maxWidth={false}>
      <h1>{t('title')}</h1>
      <NavBar />
      <Dashboard />
    </StyledContainer>
  );
};

export default App;
