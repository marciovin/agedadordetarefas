import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: 0;

}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #00875F;
}

body{
    background: #121214;
    color: #C4C4CC;
    -webkit-font-smoothing: antialiased;

}

body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
}
`
