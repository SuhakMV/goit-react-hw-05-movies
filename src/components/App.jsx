import MovieDetails from "pages/MovieDetails";
import fetchGenres from "api/genresApi";
import fetchPopFilms from "api/popFilmsApi";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <div>
      <Home></Home>
      <MovieDetails></MovieDetails>

      </div>
  );
};
