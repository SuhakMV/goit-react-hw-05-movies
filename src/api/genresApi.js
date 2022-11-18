import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

async function fetchGenres() {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&language=en-US`);
    const getGenres = response.data.genres;
    localStorage.setItem('genres', JSON.stringify(getGenres));
    console.log(getGenres);
  } catch (error) {
    console.error(error);
  }
}

fetchGenres();
export default fetchGenres;