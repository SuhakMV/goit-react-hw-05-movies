import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const fetchMovies = (query, page) => {
  return axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
};
