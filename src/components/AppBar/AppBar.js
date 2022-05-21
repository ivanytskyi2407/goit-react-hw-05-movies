// import { s } from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        HomePAge
      </NavLink>
      <NavLink to="/movies">MoviesPage</NavLink>
      <NavLink to="/movies/:movieId">MovieDetailsPage</NavLink>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </nav>
  );
};
