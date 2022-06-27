import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './MainComponent'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/lightTheme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
