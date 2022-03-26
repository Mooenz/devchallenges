import styled from 'styled-components';
import { Theme } from '../constants/Theme';

const { primary, secondary, thirdOne, thirdTwo } = Theme;

export const Main = styled.main`
  max-width: 75rem;
  margin: 3.125rem auto;
`;

export const Content = styled.section`
  text-align: center;
  padding: 3.125rem 0;

  @media screen and (min-width: 50rem) {
    padding: 4.375rem 0;
  }
`;

export const Title = styled.h1`
  color: ${primary};
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 48rem) {
    font-size: 3.125rem;
    text-transform: uppercase;
  }
`;

export const Strong = styled.span`
  color: ${thirdOne};
`;

export const Body = styled.p`
  color: ${secondary};
  font-size: 1.375rem;
  font-weight: 300;
`;

export const Anchor = styled.a`
  color: ${thirdOne};
  font-weight: 700;
  transition-duration: 0.5s;

  &:hover {
    color: ${thirdTwo};
  }
`;
