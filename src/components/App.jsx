import AppBar from './AppBar/AppBar.js';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
};
