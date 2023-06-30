import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@/assets/fonts/fonts.css';
const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
  font-family: "Humanbumsuk";
}
`;

export default GlobalStyle;
