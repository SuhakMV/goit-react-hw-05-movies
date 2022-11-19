import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovies } from 'api/api';
import PropTypes from 'prop-types';

export const Movies = props => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function serachMovies() {
      try {
        const { data } = await fetchMovies(query, page);
        if (!data.total_pages) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        setMovies(data.results);
        setTotalPages(data.total_pages);
        setStatus('success');

        console.log(data, '---res');
      } catch (error) {
        setStatus('error');
      } finally {
        setStatus('success');
      }
    }

    serachMovies();
  }, [query, page]);

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter text in the search bar!');
      return;
    }

    setQuery(query);
    setMovies([]);
    setPage(1);
    setStatus('loading');
    //setQuery('');
  };
  return (
    <div>
      <form onSubmit={() => handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      <ul>{movies.map(({ id, original_title }) => (
        <li key={id}>{original_title
        }</li>
      ))}</ul>
    </div>
  );
};

Movies.protoType = {
  onSubmit: PropTypes.func,
};

export default Movies;
