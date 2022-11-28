//import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Container, ListItem } from 'components/MovieList/MovieList.module';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(element => (
        <ListItem
          key={element.id}
          to={`/movies/${element.id}`}
          state={{ from: location }}
        >
          {element.title}
        </ListItem>
      ))}
    </Container>
  );
};

export default MovieList;
