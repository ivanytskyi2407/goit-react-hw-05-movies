import s from './HomeCard.module.css';
import { Link } from 'react-router-dom';

export default function HomeCard({ films }) {
  return films.map(({ id, title, poster_path }) => {
    return (
      <li className={s.card}>
        <Link to={`/film/${id}`} className={s.card__link}>
          <img
            className={s.card__img}
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <div className={s.card__information}>
            <h2 className={s.card__name}>{title}</h2>
          </div>
        </Link>
      </li>
    );
  });
}
