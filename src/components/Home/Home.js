import { FetchTrending } from '../API/API';
import HomeCard from './HomeCard/HomeCard';
import { useState, useEffect } from 'react';
import PageHeading from '../PageHeading/PageHeading';
import HomeList from './HomeList/HomeList';

export default function Home() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    FetchTrending().then(({ results }) => {
      setFilms(results);
    });
  }, []);
  return (
    <>
      <PageHeading text={'Trending today'} />
      {films && (
        <HomeList>
          <HomeCard films={films} />
        </HomeList>
      )}
    </>
  );
}
