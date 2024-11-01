import { createGlobalStyle } from 'styled-components'

export const Fonts = {
  Roboto: "'Roboto', serif",
  Lexend: "'Lexend', serif",
  Noto: "'Noto Sans', sans-serif"
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Fonts.Roboto};
  }

  body {
    background-color: #888;
    height: 100vh;
    width: 100vw;
  }
`
