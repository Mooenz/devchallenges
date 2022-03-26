import styled from 'styled-components';

export const Content = styled.section`
  display: grid;
  place-content: center;
  gap: 24px;
  margin: 0 auto;

  @media screen and (min-width: 50rem) {
    grid-template-columns: repeat(2, auto);
    gap: 40px;
  }

  @media screen and (min-width: 75rem) {
    grid-template-columns: repeat(3, auto);
    place-content: center;
    gap: 30px;
  }
`;
