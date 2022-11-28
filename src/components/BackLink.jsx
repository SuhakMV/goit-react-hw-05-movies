import { StyledLink } from './App.styled';


export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
