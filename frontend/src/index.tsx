import React from 'react'
import { render } from 'react-dom'
import { StoreProvider } from 'easy-peasy'
import { BrowserRouter } from 'react-router-dom'

import { App } from './components/App'
import { GlobalProvider } from './context/GlobalContext'
import { store } from './store'

render(
  <React.StrictMode>
    <GlobalProvider>
      <StoreProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
