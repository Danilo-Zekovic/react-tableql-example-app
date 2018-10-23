import React, { Component } from 'react'
import TableQL from 'react-tableql'
import gql from "graphql-tag"
import logo from './logo.svg'
import './App.css'

// query for testing
const GET_ALL_FILMS = gql`
  query Films($first: Int){
    allFilms(first:$first){
      films{
        episodeID
        title
        releaseDate
      }
    }
  }
`
const first = 4

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

// example how to control the order of the columns
const COLUMNS_ORDER = ['episodeID', 'releaseDate', 'title']

// more complex example
const COLUMNS = [
  {
    id: 'episodeID',
    label: 'Episode Identification',
  },
  'releaseDate',
  'title'
]

class App extends Component {
  render() {
    console.log(COLUMNS);
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
          variables={{ first }}

          debug={true}
          // errorMessage='Custome Error!'
          columns={COLUMNS}

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
