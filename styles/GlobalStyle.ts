import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  'html, body': {
    padding: 0,
    margin: 0,

    ...theme.fontVariants.regular,
    fontFeatureSettings: `'pnum' on, 'lnum' on, 'salt' on, 'ss01' on, 'ss02' on, 'ss03' on`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    textRendering: 'optimizeLegibility',
  },

  '*': {
    boxSizing: 'border-box',
  },

  a: {
    color: 'inherit',
    textDecoration: 'underline',
    '-webkit-text-decoration-skip': 'none',

    ':hover': {
      textDecoration: 'none',
      opacity: 0.7,
    },
  },

  'h1, h2, h3, h4, h5, h6, p, small': {
    fontWeight: 600,
    margin: 0,
    padding: 0,
  },

  '::selection': {
    background: theme.colors.selection,
  },

  '::-moz-selection': {
    background: theme.colors.selection,
  },

  '.desktopOnly': {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
    },
  },
}));
