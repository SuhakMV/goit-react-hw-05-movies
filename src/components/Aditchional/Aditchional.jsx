import { Link, useLocation } from 'react-router-dom';

export const Aditchional = () => {
  const location = useLocation();
  const from = location.state?.from ?? '/';
  return (
    <div>
      <h2>Aditchional information</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
