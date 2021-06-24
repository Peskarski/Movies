import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { StyledContainer } from './styles';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <StyledContainer maxWidth={false}>
        <h1>{t('title')}</h1>
        <NavBar />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
