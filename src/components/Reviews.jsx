import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/review/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const Reviews = () => {
  const [movieId, setMovieId] = useState('');
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(`${BASE_URL}${movieId}?api_key=${API_KEY}`)
      .then(response => {
        setReviews(response);
        console.log(response);
      });
  }, [movieId]);

  return <div>
    <ul>
    {reviews.map(element => (
            <li key={element.id}>
                <h3>{element.author}</h3>
                <p>{element.content}</p>
            </li>
        ))}
    </ul>
  </div>;
};
