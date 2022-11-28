import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrending } from 'api/api';
import '../index.css';

const Home = () => {
  const [trending, setTrending] = useState([]);
  //const [status, setStatus] = useState('idle');

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
