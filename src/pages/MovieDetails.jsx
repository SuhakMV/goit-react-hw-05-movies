import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const MovieDetails = () => {
  const [movieId, setMovieId] = useState('');
  const [filmDetail, setFilmDetail] = useState({});

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(`${BASE_URL}${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setFilmDetail(response);
        console.log(response);
      });
  }, [movieId]);





  return (
    <>
    <div>
      <button>
        <span>Go back</span>
      </button>
      <div>
        <image href=""/>
      </div>
      <div>
        <h2>title</h2>
        <p>User Score: vote_average</p>
        <h3>Overview</h3>
        <p>overview</p>
        <h2>Genres</h2>
        <p>genres.name</p>
      </div>
    </div>
    <div>
      <h2>
        Aditchional information
      </h2>
    </div>
    </>
  );
}
 
