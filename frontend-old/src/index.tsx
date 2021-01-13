import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { StoreProvider } from 'easy-peasy'
import { store } from './store'

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
