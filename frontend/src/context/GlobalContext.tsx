import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Theme } from '../constants/theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.background};
    font-family: 'Roboto', 'Poppins';
    &::-webkit-scrollbar { 
      display: none; 
    }
  }
`

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}
