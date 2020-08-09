import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './views/Home'


export default class App extends Component {
    render() {
        return (
            <div>
              <Router>
                <Home />      
            </Router>  
            </div>
        )
    }
}
