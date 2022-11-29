import { NavLink, useLocation } from 'react-router-dom';
import { Box, List, ListItem } from './Aditchional.styled';

export const Aditchional = () => {
  const location = useLocation();
  const from = location.state?.from ?? '/';
  return (
    <Box>
      <h2>Aditchional information</h2>
      <List>
        <ListItem>
          <NavLink to="cast" state={{ from }}>
            Cast
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="reviews" state={{ from }}>
            Reviews
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};
