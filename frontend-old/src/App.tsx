import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { RouterHelper } from './helpers/RouterHelper'
import { ToastProvider } from './context/ToastContext'
import { GlobalContext } from './context/Globalcontext'

export const App = () => {
  return (
    <GlobalContext>
      <Router>
        <Switch>
          <ToastProvider>
            <RouterHelper />
          </ToastProvider>
        </Switch>
      </Router>
      <GlobalStyle />
    </GlobalContext>
  )
}
