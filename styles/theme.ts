import { DefaultTheme } from 'styled-components';

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif';

export const theme: DefaultTheme = {
  fontVariants: {
    regular: {
      fontFamily: `'Vremena Grotesk Book', ${fallbackFonts}`,
      fontWeight: 300,
    },
    bold: {
      fontFamily: `'Vremena Grotesk Medium', ${fallbackFonts}`,
      fontWeight: 600,
    },
  },
  colors: {
    lightText: '#332107',
    darkText: '#140D01',
    selection: '#FFDE32',
  },
};
