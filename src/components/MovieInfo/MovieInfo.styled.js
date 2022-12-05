import styled from 'styled-components';

export const BoxInfo = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px 0;
}
`;

export const TextBox = styled.div`
  max-width: calc(1200px - 340px);
  padding: 10px;
  font-size: 15px;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin 0;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  padding 0;
  margin 0;
  :nth-child(even) {
    margin-bottom: 20px;
  }
  :nth-child(odd) {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;
