import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppRoot from './components/AppRoot'

ReactDOM.render(
  <Router>
    <AppRoot />
  </Router>,
  document.getElementById('root')
)
