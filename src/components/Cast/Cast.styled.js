import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  text-align: center;
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 30px 20px;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  width: 200px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  display: inline-block;
`;

export const BoxText = styled.p`
  padding: 10px;
  font-size: 15px;
  margin: 0;
  :first-child {
    font-weight: 700;
    padding-bottom: 0;
  }
`;
