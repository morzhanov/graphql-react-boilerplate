import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import './assets/styles/main.styl'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
