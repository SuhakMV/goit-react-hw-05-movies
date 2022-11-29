import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/api';
import { List, ListItem, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    async function getReviews() {
      try {
        const { data } = await fetchReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        error('error');
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <List>
      {reviews.length === 0 ? (
        <Text>We don't have any reviews for this movie.</Text>
      ) : (
        reviews.map(({ id, author, content }) => (
          <ListItem key={id}>
            <Text>Author: {author}</Text>
            <Text>{content}</Text>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Reviews;

Reviews.propTypes = {
  getReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
