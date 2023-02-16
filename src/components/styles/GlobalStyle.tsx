import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ExtendedTheme } from "./themes";

const GlobalStyle = createGlobalStyle<{ theme: ExtendedTheme }>`
  ${normalize}
  
  *, ::before, ::after {
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.DEFAULT', currentColor);
    font-family: 'IBM Plex Mono', monospace;
  }
  blockquote, dl, dd, h1, h2, h3,
  h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  img, svg, video, canvas, audio, 
  iframe, embed, object {
    display: block;
  }
  body {
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors?.body};
    color: ${({ theme }) => theme.colors?.text[100]};
  }
  /* ===== Custom Scroll Bar ===== */
  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors?.body};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors?.scrollHandle};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors?.scrollHandleHover};
  }
  input[type=text] {
    background-color: ${({ theme }) => theme.colors?.body};
    color: ${({ theme }) => theme.colors?.text[100]};
    caret-color: ${({ theme }) => theme.colors?.primary};
  }
  input[type=text]:focus-visible {
    outline: none;
  }
  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  ::-moz-selection { 
    background: ${({ theme }) => theme.colors?.text[100]};
    color: ${({ theme }) => theme.colors?.text[300]};
  }

  ::selection {
    background: ${({ theme }) => theme.colors?.text[100]};
    color: ${({ theme }) => theme.colors?.text[300]};
  }

  a {
    animation: none
  }
`;

export default GlobalStyle;
