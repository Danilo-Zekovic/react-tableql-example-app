import React, { Component } from 'react'
import TableQL from 'react-tableql'
import gql from "graphql-tag"
import logo from './logo.svg'
import './App.css'

// query for testing
const GET_ALL_FILMS = gql`
  {
    allFilms(first:7){
      films{
        title
        episodeID
      }
    }
  }
`

class App extends Component {
  constructor(props) {
    super(props)
  }
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
          <h2>TableQL Demo App</h2>
        </header>
        <TableQL
          query={GET_ALL_FILMS}
          tableql=''
          thead=''
          theadtr=''
          theadth=''
          tbody=''
          tbodytr=''
          tbodytd=''
        />
      </div>
    );
  }
}

export default App;
