import styled from 'styled-components';
import { Theme } from '../../constants/Theme';

const { primary, secondary, thirdOne, thirdTwo } = Theme;
export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 3.125rem;

  @media screen and (min-width: 50rem) {
    margin-bottom: 4.375rem;
  }
`;

export const List = styled.ul`
  border-radius: 0.625rem;
  box-shadow: rgb(34 87 122 / 80%) 0px 10px 30px -7px;
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  background-color: ${primary};
  color: ${thirdOne};
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  transition-duration: 0.3s;
  transform: ${({ tapActive, tapSelect }) =>
    tapActive === tapSelect && 'translateY(0.3125rem)'};
  color: ${({ tapActive, tapSelect }) => tapActive === tapSelect && thirdTwo};

  &:active {
    transform: translateY(0.3125rem);
  }

  &:hover {
    color: ${thirdTwo};
  }

  &:nth-child(1) {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &:nth-child(2) {
    border-right: 1px solid ${secondary};
    border-left: 1px solid ${secondary};
  }

  &:nth-child(4) {
    border-radius: 0 0.5rem 0.5rem 0;
    border-left: 1px solid ${secondary};
  }

  @media screen and (min-width: 50rem) {
    font-size: 20px;
  }
`;
