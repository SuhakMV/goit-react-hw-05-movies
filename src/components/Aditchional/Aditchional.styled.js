import styled from 'styled-components';

export const Box = styled.div`
  border-top: 1px solid;
  border-bottom: 1px solid;
`;
export const List = styled.ul`
  padding: 0 0 0 50px;
  list-style-type: disc;
  font-size: 15px;
  font-weight: 600;
`;

export const ListItem = styled.li`
  padding: 0;
  :first-child {
    margin-bottom: 5px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
