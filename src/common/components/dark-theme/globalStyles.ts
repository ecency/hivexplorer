import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .card {
    background: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.cardBorder};
  }

  .appNav {
    background: ${({ theme }) => theme.body};
  }
  .navText{
    color: ${({ theme }) => theme.text};
  }
  .bi-globe{
    fill: ${({ theme }) => theme.text};
  }
  svg {
    color: ${({theme})=> theme.icon};
    width: 18px;
    height: 18px;
  }
  `