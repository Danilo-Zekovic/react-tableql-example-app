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
        episodeID
        title
        releaseDate
      }
    }
  }
`

const GET_ALL_PEOPLE = gql`
  {
    allPeople{
      people{
        name
        gender
        eyeColor
        birthYear
      }
    }
  }
`

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
          <h2>TableQL Demo App</h2>
        </header>
        <TableQL
          query={GET_ALL_FILMS}
          debug={false}
          tableql=''
          thead='blue-header'
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
