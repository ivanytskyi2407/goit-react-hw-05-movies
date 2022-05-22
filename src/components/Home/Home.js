// import s from './Home.module.css';
import { FetchTrending } from '../API/API';
import { useState, useEffect } from 'react';
export default function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    FetchTrending().then(({ results }) => {
      setFilms(results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
    </>
  );
}
