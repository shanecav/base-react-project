// @flow

import { injectGlobal } from "styled-components";

// minimal normalization
injectGlobal`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font: 16px/1 sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  main,
  li {
    display: block;
  }
  strong {
    font-weight: bold;
  }
  a,
  button {
    color: inherit;
    transition: .3s;
  }
  a {
    text-decoration: none;
  }
  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :focus {
    outline: 0;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  input, textarea, keygen, select, button {
    font-family: 'brandon-grotesque', sans-serif;
  }
`;
