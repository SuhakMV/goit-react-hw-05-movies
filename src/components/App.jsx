//import { lazy } from 'react';
import { Cast } from 'components/Cast';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Reviews } from 'components/Reviews';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route patch="cast" element={<Cast />} />
            <Route patch="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
