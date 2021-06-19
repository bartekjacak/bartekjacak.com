import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '~/styles/GlobalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
