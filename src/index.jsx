import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './Components/Home'
import About from './Components/About'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
