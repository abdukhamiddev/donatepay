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
html{
    overflow-y:hidden;
}
html,body,.App{
    height: 100%;
    overflow-x:hidden !important;
}


`;
export default GlobalStyle;
