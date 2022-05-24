import { useState } from 'react';
import { FetchFilmSearch } from '../../services/API';
import { Link } from 'react-router-dom';
export default function Movies() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Введіть назву картинки');
    }
    FetchFilmSearch(query).then(({ results }) => {
      setData(results);
    });
    setQuery('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
        <button type="submit">
          <span className="button-label">Search</span>
        </button>
      </form>
      <ul>
        {data &&
          data.map(({ id, original_title }) => {
            return (
              <li>
                <Link to={`${id}`}>{original_title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
