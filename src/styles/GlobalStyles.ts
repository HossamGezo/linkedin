import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
  }
  body {
    font-family: "comic sans ms";
    background-color: #F5F5F5;
  }
  button {
    cursor: pointer;
  }
`;
