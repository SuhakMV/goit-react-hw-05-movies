import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 0 0 50px;
  list-style-type: disc;
  font-size: 20px;
`;

export const ListItem = styled.li`
  padding: 15px 0 15px 0;
`;

export const Text = styled.p`
  margin: 0;
  line-height: 1.4;
  
  :first-child {
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 5px;
}
`;