import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

 :root {
    display: flex;
    justify-content: center;
    height: 100%;
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.default}
  }

  body {
    font-family: 'CirceRounded', Roboto, Inter, Arial, Helvetica, sans-serif;
    font-weight: 400;
    max-width: 1200px;
    width: 100%;
  }

  #root {
    height: 100%;
    display: flex;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
  }

  figure {
    margin: 0;
  }

`
