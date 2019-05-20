import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'

import SwapiLocal from './pages/SwapiLocal'
import SwapiOnline from './pages/SwapiOnline/SwapiOnline'
import { Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h3>TableQL Demo App</h3>
        </header>
        <Link to="/tableql">SWAPI Online ApolloTabelQL</Link>
        <Link to="/local">SWAPI Local</Link>

        <Route path="/tableql" component={SwapiOnline} />
        <Route path="/local" component={SwapiLocal} />
      </div>
    );
  }
}

export default App;
