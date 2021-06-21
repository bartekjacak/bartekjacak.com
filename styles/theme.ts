import { DefaultTheme } from 'styled-components';

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif';

const LIGHT_TEXT_COLOR = '#332107';
const DARK_TEXT_COLOR = '#140D01';

export const theme: DefaultTheme = {
  breakpoints: {
    md: 768,
  },
  fontVariants: {
    regular: {
      fontFamily: `'Vremena Grotesk Book', ${fallbackFonts}`,
      fontWeight: 300,
      color: LIGHT_TEXT_COLOR,
    },
    bold: {
      fontFamily: `'Vremena Grotesk Medium', ${fallbackFonts}`,
      fontWeight: 600,
      color: DARK_TEXT_COLOR,
    },
  },
  colors: {
    lightText: LIGHT_TEXT_COLOR,
    darkText: DARK_TEXT_COLOR,
    selection: '#FFDE32',
  },
};
