import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';


const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

const Movies = () => {
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
      {films.length > 0 && <MovieList movies={films} />}
    </div>
  );
};

export default Movies;
