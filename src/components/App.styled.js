import styled from 'styled-components';

export const Box = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  display: flex;
  text-transform: uppercase;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  :before {
    content: '\u2606'' ';
  }
  :after {
    content: '\u2606'' ';
  }
`;

export const MovieBox = styled.div`
  padding: 0 10px;
  margin: 10px 0;
`;
