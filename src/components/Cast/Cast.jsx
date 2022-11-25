import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css'

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(`${BASE_URL}${movieId}/credits?api_key=${API_KEY}`)
      .then(response => {
        setCast(response.data.cast);
      });
  }, [movieId]);

  return (
    <ul>
      {cast.map(element => (
        <li className={css.cast_item} key={element.id}>
          <img src={`https://image.tmdb.org/t/p/w200/${element.profile_path}`} alt="" />
          <div className={css.cast_info}>
            <p className={css.cast_name}>{element.name}</p>
            <p className={css.text}>
              Character: <span>{element.character}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
