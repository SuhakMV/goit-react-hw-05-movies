import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    if (query === '') {
      return;
    }
    axios
      .get(
        `${BASE_URL}$?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )
      .then(response => {
        setFilms(response.data.results);
      });
  }, [query, page]);
  console.log(films);

  const handleFormSubmit = inputText => {
    setQuery(inputText);
    setPage(1);
    //setStatus('loading');
  };

  const handleInputChange = event => {
    setInputText(event.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`${film.id}`}>{film.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
