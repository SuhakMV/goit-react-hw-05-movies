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
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
