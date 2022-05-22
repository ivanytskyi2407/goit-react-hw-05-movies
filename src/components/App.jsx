import AppBar from './AppBar/AppBar.js';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container">
      <AppBar />

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
