import { NavBar } from './components/NavBar';
import { Dashboard, MoviesList } from './components/Dashboard';
<<<<<<< HEAD
import { Filters } from './components/Movies';
import { MovieDetails } from './components/MovieDetails';
=======
import { Movies } from './components/Movies';
<<<<<<< HEAD
>>>>>>> changed filters logic
=======
import { RandomMovie } from './components/RandomMovie';
>>>>>>> added random movie feature
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
<<<<<<< HEAD
          <Route path="/movies" component={Filters} />
          <Route path="/movie-details/:id" component={MovieDetails} />
=======
          <Route path="/movies" component={Movies} />
<<<<<<< HEAD
          {/* <Route path="/random movie/" render={() => <FMovies />} /> */}
>>>>>>> changed filters logic
=======
          <Route path="/random movie/" component={RandomMovie} />
>>>>>>> added random movie feature
        </Switch>
        <Switch>
          <Route path="/dashboard/:list" exact component={MoviesList} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
