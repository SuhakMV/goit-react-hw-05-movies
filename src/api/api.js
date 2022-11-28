import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = '/search/movie';
const TRENDING_URL = '/trending/movie/week';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';
const page = '1';

export const fetchTrending = async () => {
  return axios.get(
    `${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};


/*export const fetchMovies = (query, page) => {
  return axios.get(
    `${BASE_URL}${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
};*/


