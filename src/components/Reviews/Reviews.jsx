import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './Reviews.module.css'

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(
        `${BASE_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(response => {
        setReviews(response.data.results);
      });
  }, [movieId]);

  if (reviews.length === 0) {
    return "We don't have any reviews for this movie.";
  }

  return (
    <div className={css.container}>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <h3 className={css.title}>Author: {author}</h3>
            <p className={css.text}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
