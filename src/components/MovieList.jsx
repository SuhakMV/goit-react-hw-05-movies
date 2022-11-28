import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const Container = styled.div`
    margin: 0 auto;
    padding: 0 32px;
  `;

  const ListItem = styled(Link)`
  display: flex;
  column wrap;
  font-size: 16px;
  padding: 6px 5px;
  border-radius: 4px;
  text-decoration: none;
  color: dodgerblue;
  font-weight: 500;

  &.active {
    color: hotpink;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: darkblue;
  }
  
  :before {
    content:'\u25b6';
  }
  `;

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
