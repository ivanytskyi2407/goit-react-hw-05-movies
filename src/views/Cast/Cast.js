import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchFilmCast } from '../../services/API';
import s from './Cast.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async movieId => {
      const { cast } = await FetchFilmCast(movieId);
      setCast(cast);
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(({ name, profile_path, character, credit_id }) => (
            <li className={s.item} key={credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
              />
              <h2>Actor: {name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any Cast for this movie</p>
      )}
    </>
  );
}
