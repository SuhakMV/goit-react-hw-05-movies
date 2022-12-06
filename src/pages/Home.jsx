import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/App.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getTrending() {
      try {
        const { data } = await fetchTrending(page);
        page === 1
          ? setTrending(data.results)
          : setTrending(prevTrending => [...prevTrending, ...data.results]);
      } catch (error) {
        error('error');
      }
    }
    getTrending();
  }, [page]);

  const handleOnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <div>
        <Title>Trending today</Title>
        <MovieList movies={trending} onLoadMore={handleOnLoadMore} />
      </div>
    </main>
  );
};

export default Home;
