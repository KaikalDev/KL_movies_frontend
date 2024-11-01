import { createGlobalStyle } from 'styled-components'

export const Fonts = {
  Roboto: "'Roboto', serif",
  Lexend: "'Lexend', serif",
  Noto: "'Noto Sans', sans-serif"
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Fonts.Roboto};
    list-style: none;
  }

  body {
    color: #eee;
    overflow-x: hidden;
    background-color: #1d44b8;
    height: 100vh;
    width: 100vw;
  }

  .aside {
    height: 445px;
    width: 300px;
  }
`
