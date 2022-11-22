import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = '861782ee1fc6aacf939bc06e51306075';

const NavItem = styled(NavLink)`
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

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(response => {
        setTrending(response.data.results);
        setPage(1);
      });
  }, []);
  //console.log(trending);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trending.map(film => (
          <NavItem key={film.id} to={`${film.id}`}>
            {film.title}
          </NavItem>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
};
