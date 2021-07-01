import { NavBar } from './components/NavBar';
import { Dashboard, MoviesList } from './components/Dashboard';
import { Filters } from './components/Movies';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
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
        <Switch>
          <Route path="/" component={NavBar} />
        </Switch>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/movies" component={Filters} />
          <Route path="/movie-details/:id" component={MovieDetails} />
        </Switch>
        <Switch>
          <Route path="/dashboard/:list" exact component={MoviesList} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
