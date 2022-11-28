import { lazy } from 'react';
//import { Cast } from './Cast/Cast';
//import { Reviews } from './Reviews/Reviews';
//import { Home } from 'pages/Home';
//import { MovieDetails } from 'pages/MovieDetails';
//import { Movies } from 'pages/Movies';

import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import { Layout } from './Layout/Layout';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
