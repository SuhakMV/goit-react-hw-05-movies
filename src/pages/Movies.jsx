import { useState, useEffect } from 'react';
import axios from 'axios';
//import { NavLink, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from 'components/MovieList';
//import {fetchMovies} from '../api/api';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
      .then(response => {
        setFilms(response.data.results);
      });
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();
    if (inputText.trim() === '') {
      toast.error('Please enter text in the search bar!');
      return;
    }

    setQuery(inputText);
    setPage(1);
    setInputText('');
  };

  const handleInputChange = event => {
    setInputText(event.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      <MovieList movies={films} />
    </div>
  );
};
