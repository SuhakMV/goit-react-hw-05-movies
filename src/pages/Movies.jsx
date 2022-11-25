import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from 'components/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
//import {fetchMovies} from '../api/api';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //const [inputText, setInputText] = useState('');
  const filmQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filmQuery === '') {
      return;
    }
    axios
      .get(
        `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${filmQuery}&page=1&include_adult=false`
      )
      .then(response => {
        setFilms(response.data.results);
      });
  }, [searchParams]);

  const handleSubmit =  query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={films} />
    </div>
  );
};
