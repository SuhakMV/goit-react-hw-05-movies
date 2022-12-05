import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  font-size: 15px;
  font-weight: 600;
  padding: 0;
`;

export const ListItem = styled.li`
  width: 300px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const BoxText = styled.div`
  align-items: center;
`

export const Text = styled.p`
  padding: 20px 15px;
  font-size: 15px;
  margin: 0;
`;