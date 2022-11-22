import { Cast } from 'components/Cast';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Reviews } from 'components/Reviews';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import { Layout } from './Layout';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route path="movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Routes>
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};
