import PropTypes from 'prop-types';
import { Box } from 'components/App.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { BoxText, List, ListItem, Text } from './MovieList.styled';
import Button from 'components/Button/Button';
import image from '../../img/index-main.jpg'

const MovieList = ({ movies, onLoadMore }) => {
  const location = useLocation();


  

  return (
    <Box>
      <List>
        {movies.map(({id, title, poster_path, release_date }) => {
          return (
            <ListItem key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }} style={{height: '100%'}}>
                <img
                  src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : `${image}`}
                  alt={title}
                  object-fit="cover"/>
                <BoxText>
                  <Text>
                    {title} ({release_date.substr(0, 4)})
                  </Text>
                </BoxText>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
      <Button onClick={onLoadMore}/>
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
