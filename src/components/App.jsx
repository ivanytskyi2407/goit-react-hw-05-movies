import AppBar from './AppBar/AppBar.js';
import Home from './Home/Home';
import Movies from '../views/Movies/Movies';
import MovieDetails from '../views/MovieDetails';
import Cast from '../views/Cast/Cast';
import Reviews from '../views/Reviews/Reviews';
import Page404 from './Page404/Page404';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index exact="true" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};
