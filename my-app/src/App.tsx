import { NavBar } from './components/NavBar';
import { Dashboard, MoviesList } from './components/Dashboard';
import { MovieDetails } from './components/MovieDetails';
import { Movies } from './components/Movies';
import { RandomMovie } from './components/RandomMovie';
import { LogIn } from './components/LogIn';
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
          <Route path="/login" exact component={LogIn} />
          <Route path="/login/:request_token" exact component={LogIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/movie-details/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/random movie/" component={RandomMovie} />
        </Switch>
        <Switch>
          <Route path="/dashboard/:list" exact component={MoviesList} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
