import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(movie);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(`${BASE_URL}${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setMovie(response.data);
        setGenres(response.data.genres.map(genre => genre.name).join(', '));
        //console.log(response);
      });
  }, [movieId]);

  
  console.log(genres);

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>

        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </div>
        <div>
          <h2></h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
        <div>
          <h2>Aditchional information</h2>
        </div>
        <Outlet />
      </div>
    </>
  );
};
