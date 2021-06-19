import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Vremena Grotesk Book';
    font-style: normal;
    font-weight: 300;
    src: local('Vremena Grotesk Book'), url('/fonts/Vremena/Book.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Vremena Grotesk Medium';
    font-style: normal;
    font-weight: 600;
    src: local('Vremena Grotesk Medium'), url('/fonts/Vremena/Medium  .woff') format('woff');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Vremena Grotesk Book', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;

    -webkit-font-smoothing: antialiased;;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  ::selection {
    background: ${props => props.theme.colors.selection};
  }
  ::-moz-selection {
    background: ${props => props.theme.colors.selection};
  }
`;
