import axios from 'axios';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const ADIT_URL = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '861782ee1fc6aacf939bc06e51306075';


export const fetchTrending = page => {
  return axios.get(
    `${TRENDING_URL}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};

export const fetchMovies = (query, page) => {
  return axios.get(
    `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(
    `${ADIT_URL}${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchCast = (movieId) => {
  return axios.get(
    `${ADIT_URL}${movieId}/credits?api_key=${API_KEY}`
  );
};

export const fetchReviews = (movieId) => {
  return axios.get(
    `${ADIT_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};