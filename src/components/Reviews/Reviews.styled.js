import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 0 0 20px;
  list-style-type: disc;
  font-size: 15px;
`;

export const ListItem = styled.li`
  padding: 10px 0 10px 0;
`;

export const Text = styled.p`
  margin: 0;
  overflow-wrap: break-word;
  line-height: 1.4;
  
  :first-child {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 5px;
}
`;