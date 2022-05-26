import { useState, useEffect } from 'react';
import { FetchFilmSearch } from '../../services/API';
import { Link, useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';
import { Loader } from '../../components/Loader/Loader';

export default function Movies() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmQuery = searchParams.get('film') || '';

  useEffect(() => {
    setIsLoading(true);
    if (filmQuery) {
      FetchFilmSearch(filmQuery)
        .then(({ results }) => {
          setData(results);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [filmQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearchParams({ film: query });
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button className={s.SearchFormbtn} type="submit" />
        <input
          className={s.SearchFormInput}
          type="search"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </form>
      <ul className={s.list}>
        {data &&
          data.map(({ id, title }) => {
            return (
              <li key={id} className={s.item}>
                <Link className={s.item} to={`${id}`}>
                  <h3>{title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
