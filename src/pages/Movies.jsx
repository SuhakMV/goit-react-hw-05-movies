import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import {fetchMovies} from '../api/api';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  //console.log(films);

  /* useEffect(() => {
    if (query === '') {
      return;
    }
    async function serachMovies() {
      try {
        const response = await fetchMovies(query, page);
        if (!response.data.total_results) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        setFilms(response.data.results);
        //setTotalHits(data.totalHits);
        //setStatus('success');

        console.log(response.data, '---res');
      } catch (error) {
        //setStatus('error');
      } finally {
        //setStatus('success');
      }
    }
    serachMovies();
  }, [query, page]); */

  useEffect(() => {
    if (query === '') {
      return;
    }
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
      .then(response => {
        setFilms(response.data.results);
        console.log(response.data);
      });
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();
    if (inputText.trim() === '') {
      toast.error('Please enter text in the search bar!');
      return;
    }

    //props.onSubmit(query);
    setQuery(inputText);
    setPage(1);
    setInputText('');
  };

  /*const handleFormSubmit = inputText => {
    setQuery(inputText);
    setPage(1);
    //setStatus('loading');
  };*/

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
