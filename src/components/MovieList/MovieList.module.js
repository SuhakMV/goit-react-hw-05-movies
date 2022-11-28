import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
    margin: 0 auto;
    padding: 0 32px;
  `;

  export const ListItem = styled(NavLink)`
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