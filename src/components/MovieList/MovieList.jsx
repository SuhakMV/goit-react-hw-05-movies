import PropTypes from 'prop-types';
import { Box } from 'components/App.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { List, ListItem } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <ListItem key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};