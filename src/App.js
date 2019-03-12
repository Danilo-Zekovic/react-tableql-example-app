import React, { Component } from 'react'
import TableQL from 'react-tableql'
import logo from './logo.svg'
import './App.css'

// query for testing
const GET_ALL_FILMS = `
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

const GET_ALL_PEOPLE = `
  {
    allPeople{
      people{
        name
        gender
        eyeColor
        birthYear
        filmConnection {
          pageInfo{
            hasNextPage
          }
        }
      }
    }
  }
`

// example how to control the order of the columns
const COLUMNS_ORDER = ['episodeID', 'title', 'releaseDate' ]

// more complex example
const COLUMNS = [
  {
    id: 'episodeID',
    label: 'Episode Identification',
  },
  'releaseDate',
  'title'
]

const COLUMNS_PEOPLE = [
  'name', 'gender', 'eyeColor', 'birthYear',
  {
    id:'filmConnection.pageInfo.hasNextPage',
    label:'Has Next Page'
  }
]

class App extends Component {

  state = {
    query: ``,
    input: '',
    columns: [],
    first: 3,
  }

  renderTables = (query, columns = []) => {
    this.setState({
      query: query,
      columns: columns,
    })
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
        <button onClick={ () => {this.renderTables(GET_ALL_PEOPLE, COLUMNS_PEOPLE)} }>Get All People</button>||
        <button onClick={ () => {this.renderTables(GET_ALL_FILMS, COLUMNS)} }>Get First {this.state.first} Films</button>||
        <button onClick={ () => {this.renderTables(GET_ALL_FILMS, COLUMNS_ORDER)} }>Get First {this.state.first} Films v2</button>
        <br/>
        <label>
          First Number of Films:
          <input value={this.state.first} onChange={ (e) => this.setState({ first: e.target.value }) }/>
        </label>

        { this.state.query && <TableQL
          query={this.state.query}
          variables={{ first: this.state.first || 0 }}

          debug={false}
          // errorMessage='Custome Error!'
          columns={this.state.columns}

          tableql=''
          thead='blue-header'
          theadtr=''
          theadth=''
          tbody=''
          tbodytr=''
          tbodytd=''
        />}
      </div>
    );
  }
}

export default App;
