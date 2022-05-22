// import s from "./MovieDetails.module.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFilmById } from '../services/API';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  useEffect(() => {
    FetchFilmById(movieId).then(film => {
      setFilmInfo(film);
    });
  }, [movieId]);
  console.log(filmInfo);

  return <>{filmInfo && <h2>{`${filmInfo.title}`}</h2>}</>;
}
