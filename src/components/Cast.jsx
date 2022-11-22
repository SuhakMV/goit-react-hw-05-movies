import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Cast = () => {
  const [movieId, setMovieId] = useState('');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios.get(`${BASE_URL}${movieId}/credits?api_key=${API_KEY}`).then(response => {
      setCast(response.cast);
      console.log(response);
    });
  }, [movieId]);

  return <div>
    <ul>
        {cast.map(element => (
            <li key={element.id}>
                <img src={element.profile_path} alt="" />
                <p>{element.name}</p>
                <p>Character: <span>{element.character}</span></p>
            </li>
        ))}
    </ul>
  </div>;
};
