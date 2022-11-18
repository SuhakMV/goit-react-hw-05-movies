import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

async function fetchPopFilms(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?api_key=${API_KEY}&language=en-US&${page}`
    );
    const popFilms = response.data.results;
    //localStorage.setItem('genres', JSON.stringify(getGenres));
    console.log(popFilms);
    return popFilms;
  } catch (error) {
    console.error(error);
  }
}

fetchPopFilms();
export default fetchPopFilms;