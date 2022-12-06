import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovies } from 'api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        const { data } = await fetchMovies(query, page);
        if (!data.total_results) {
          toast.error('Nothing found!');
        }
        page === 1
          ? setFilms(data.results)
          : setFilms(prevFilms => [...prevFilms, ...data.results]);
      } catch (error) {
        error('error');
      }
    }
    getMovies();
  }, [searchParams, page]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  const handleOnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {films.length > 0 && (
        <MovieList movies={films} onLoadMore={handleOnLoadMore} />
      )}
    </div>
  );
};

export default Movies;
