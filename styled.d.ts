import 'styled-components';

declare module 'styled-components' {
  interface FontVariant {
    fontFamily: string;
    fontWeight: number;
    color: string;
  }

  export interface DefaultTheme {
    breakpoints: {
      md: number;
    };
    fontVariants: {
      regular: FontVariant;
      bold: FontVariant;
    };

    colors: {
      lightText: string;
      darkText: string;
      selection: string;
    };
  }
}
