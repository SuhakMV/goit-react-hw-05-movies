import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import { Box } from 'components/App.styled';

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
    <main>
      <Box>
        <h1>Trending today</h1>
        <MovieList movies={trending} />
      </Box>
    </main>
  );
};

export default Home;
