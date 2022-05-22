import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
