import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovies } from 'api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(films.length);
  //const [inputText, setInputText] = useState('');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        const { data } = await fetchMovies(query);
        setFilms(data.results);
      } catch (error) {
        toast.error('Nothing found!');
      }
    }
    getMovies();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {films.length > 0 && <MovieList movies={films} />}
    </div>
  );
};

export default Movies;
