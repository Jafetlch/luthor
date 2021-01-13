import React from 'react'
import { ThemeProvider } from './themeColor'
import { UserProvider } from './UserContext'

export const GlobalContext: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  )
}
