import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchFilmReviews } from '../../services/API';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async movieId => {
      const { results } = await FetchFilmReviews(movieId);
      setReviews(results);
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li className={s.item} key={author}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
