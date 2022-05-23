import s from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFilmById } from '../services/API';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);

  useEffect(() => {
    FetchFilmById(movieId).then(film => {
      setFilmInfo(film);
    });
  }, [movieId]);

  return (
    <>
      {filmInfo && (
        <>
          <Link to="/">Go back</Link>
          <div className={s.wrapper}>
            <img
              className={s.picture}
              src={`https://image.tmdb.org/t/p/original${filmInfo.poster_path}`}
              alt=""
            />
            <ul>
              <h2 className={s.title}>{`${filmInfo.title}`}</h2>
              <li className={s.item}>
                <h3>Vote / Votes</h3>
                <p>{filmInfo.vote_average}</p>
              </li>
              <li className={s.item}>
                <h3>Release date</h3>
                <p>{filmInfo.release_date}</p>
              </li>
              <li className={s.item}>
                <h3>Genre</h3>
                <p>{filmInfo.genres.map(({ name }) => name).join(', ')}</p>
              </li>
              <li className={s.item}>
                <h3>About</h3>
                <p>{filmInfo.overview}</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
