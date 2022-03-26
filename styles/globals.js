import { createGlobalStyle } from 'styled-components';
import { Theme } from '../constants/Theme';

const { white } = Theme;

const globals = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${white} ;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .spaceLateral {
    padding: 0 1.5rem;

    @media screen and (min-width:48rem) {
      padding: 0 2.5rem;
    }

    @media screen and (min-width:75rem) {
      padding: 0;
    }
  }
`;

export default globals;
