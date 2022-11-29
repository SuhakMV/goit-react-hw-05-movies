import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import '../index.css';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getTrending() {
      try {
        const { data } = await fetchTrending();
        setTrending(data.results);
      } catch (error) {
        error('error');
      }
    }
    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trending} />
    </div>
  );
};

export default Home;
