import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { Aditchional } from 'components/Aditchional/Aditchional';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const [date, setDate] = useState('')
  const [poster, setPoster] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  //const from = location.state?.from ?? '/';
  //console.log(movie.poster_path);
  const posterURL = 'https://image.tmdb.org/t/p/w500';
  

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    axios
      .get(`${BASE_URL}${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setMovie(response.data);
        setGenres(response.data.genres.map(genre => genre.name).join(', '));
        setDate(new Date(`${response.data.release_date}`).getFullYear());
        setPoster(response.data.poster_path);
      });
  }, [movieId]);

  return (
    <>
      <div>
        <div>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <img src={`${posterURL}${poster}`} alt="" />
        </div>
        <div>
          <h2>{movie.original_title} ({date})</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
        <Aditchional />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
