import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  width: auto;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 8px 0;
  margin-bottom: 15px;
  box-shadow: 0 8px 6px -6px black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  padding: 8px 20px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  :first-child {
    padding-left: 82px;
}

  &.active {
    color: hotpink;
  }

 
`;
