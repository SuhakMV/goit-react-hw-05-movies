import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { Aditchional } from 'components/Aditchional/Aditchional';
import { fetchMovieDetails } from 'api/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MovieBox } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    async function getMovieDetails() {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        error('error');
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <MovieBox>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieInfo movie={movie} />
        <Aditchional />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MovieBox>
    </>
  );
};

export default MovieDetails;
