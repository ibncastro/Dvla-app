import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './components/history'

import Home from './views/Home'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home history={history} />
        </Router>
      </div>
    );
  }
}
