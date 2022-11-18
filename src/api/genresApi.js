import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const fetchGenres = () => {
  return axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US`
  ).console.log();
}