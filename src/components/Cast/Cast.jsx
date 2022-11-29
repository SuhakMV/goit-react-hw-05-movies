import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/api';
import { BoxText, List, ListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    async function getCast() {
      try {
        const { data } = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        error('error');
      }
    }
    getCast();
  }, [movieId]);

  return (
    <List>
      {cast.map(({ id, profile_path, name, character, original_title }) => {
        return (
          <ListItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `https://thesource.sa.ua.edu/wp-content/uploads/sites/57/2019/08/no-person-200x300.png`
              }
              alt={original_title}
            />
            <div>
              <BoxText>{name}</BoxText>
              <BoxText>
                Character: <span>{character}</span>
              </BoxText>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Cast;
