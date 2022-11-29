import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  border: 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  gap: 4px;
  
  color: black;
  
  

  :hover {
    color: hotpink;
  }

  :before {
    content: '\u2190';
  }
`;
