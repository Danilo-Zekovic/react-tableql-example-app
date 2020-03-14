import React, {useState} from 'react'
import { ApolloTableQL } from 'react-tableql'

import {
  GET_ALL_FILMS,
  GET_ALL_PEOPLE,
  COLUMNS,
  COLUMNS_ORDER,
  COLUMNS_PEOPLE
} from '../queries/SwapiLocalQueries'

const SwapiLocal = () => {
  const [first, setFirst] = useState(3)
  const [query, setQuery] = useState(``)
  const [columns, setColumns] = useState(3)

  const renderTables = (query, columns = []) => {
    setQuery(query)
    setColumns(columns)
  }



  return (
    <div>
      <h1>SWAPI Local</h1>
      <p>Works when connected to <a href="https://github.com/graphql/swapi-graphql" style={{margin: 0}} target="blank">SWAPI GraphQL</a></p>
      <button onClick={ () => {renderTables(GET_ALL_PEOPLE, COLUMNS_PEOPLE)} }>Get All People</button>||
      <button onClick={ () => {renderTables(GET_ALL_FILMS, COLUMNS)} }>Get First {first} Films</button>||
      <button onClick={ () => {renderTables(GET_ALL_FILMS, COLUMNS_ORDER)} }>Get First {first} Films v2</button>
      <br/>
      <label>
        First Number of Films:
        <input value={first} onChange={ (e) => setFirst(e.target.value) }/>
      </label>

      { query && <ApolloTableQL
        query={query}
        variables={{ first: first || 0 }}

        debug={true}
        errorMessage='Custom Error!'
        columns={columns}

        styles={
          {
            thead:'blue-header'
          }
        }
      />}
    </div>
  )
}

export default SwapiLocal
