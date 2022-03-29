import styled from 'styled-components';
import { Theme } from '../../constants/Theme';

const { white, primary, secondary, thirdOne, thirdTwo } = Theme;

export const Article = styled.article`
  background-color: ${primary};
  border: 1px solid ${secondary};
  border-radius: 0.5rem;
  box-shadow: rgba(34, 87, 122, 0.8) 0px 10px 30px -7px;
  color: ${white};
  max-width: 380px;
  padding: 0.75rem 0.75rem 1.5rem;
  width: 100%;
  transition-duration: 0.5s;

  &:hover {
    border: 1px solid ${thirdTwo};
  }
`;

export const ContainerImage = styled.div`
  background-color: ${secondary};
  border: 1px solid ${secondary};
  border-radius: 0.5rem;
  display: block;
  height: 15.625rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover {
    border: 1px solid ${thirdTwo};
  }
`;

export const Img = styled.img`
  border-radius: 0.5rem;
  height: 15.625rem;
  object-fit: cover;
  object-position: top;
  transition-duration: 0.5s;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Level = styled.span`
  background: linear-gradient(90deg, ${thirdOne} 0%, ${thirdTwo} 100%);
  border-radius: 0 0 0 0.5rem;
  color: ${primary};
  font-size: 0.625rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.0938rem;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const Content = styled.div`
  margin: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
  color: ${secondary};
`;

export const Body = styled.p`
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 1.5625rem;
  color: ${white};
`;

export const Anchor = styled.a`
  background-color: ${thirdOne};
  padding: 0.3125rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${thirdTwo};
  }
`;
