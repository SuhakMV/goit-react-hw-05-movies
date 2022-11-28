import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

const Cast = () => {
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
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <li className={css.cast_item} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`
              }
              alt=""
            />
            <div className={css.cast_info}>
              <p className={css.cast_name}>{name}</p>
              <p className={css.text}>
                Character: <span>{character}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
