import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select:none;
    overflow-wrap: break-word;
    word-wrap: break-word;

}
body{

margin: 0;
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    overflow-y: scroll !important;
}
html{
    overflow-y:hidden;
}
html,body, .app{
    height: 100%;
    overflow-x:hidden !important;
}
.app{
    min-height: 100vh;
    height: 100%;
    overflow-y:hidden;
}


`;
export default GlobalStyle;
