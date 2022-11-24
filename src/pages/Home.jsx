import { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { MovieList } from 'components/MovieList';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(response => {
        setTrending(response.data.results);
        setPage(1);
      });
  }, []);
  
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trending}/>
    </div>
  );
};
