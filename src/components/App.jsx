import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

// import AppBar from './AppBar/AppBar.js';
// import Home from './Home/Home';
// import Movies from '../views/Movies/Movies';
// import MovieDetails from '../views/MovieDetails';
// import Cast from '../views/Cast/Cast';
// import Reviews from '../views/Reviews/Reviews';
// import Page404 from './Page404/Page404';

const AppBar = lazy(() => import('./AppBar/AppBar.js'));
const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('../views/Movies/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails'));
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const Page404 = lazy(() => import('./Page404/Page404'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};
