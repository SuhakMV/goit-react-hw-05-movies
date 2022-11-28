import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /*max-width: 1200px;*/
  margin: 0 auto;
  padding: 0 32px;
`;

export const Header = styled.header`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  /*border-bottom: 1px solid black;*/
  box-shadow: 0 8px 6px -6px black;

  > nav {
    display: flex;
    
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  padding: 8px 25px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  
  &.active {
    color: hotpink;
  }
`;

export const Trend_Link = styled(NavLink)`
  display: flex;
  column wrap;
  font-size: 15px;
  padding: 6px 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  
  &.active {
    color: hotpink;
  }

`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;