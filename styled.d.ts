import 'styled-components';

declare module 'styled-components' {
  interface FontVariant {
    fontFamily: string;
    fontWeight: number;
  }

  export interface DefaultTheme {
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
