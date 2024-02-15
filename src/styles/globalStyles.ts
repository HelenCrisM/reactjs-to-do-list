import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
}

 

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-family: sans-serif;
  background: ${COLORS.teal};
}


button {
    cursor: pointer;
}

`;

export default GlobalStyle;
