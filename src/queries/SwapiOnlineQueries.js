import React from 'react'
import moment from 'moment'

const Button = (data) => (
  <button onClick={() => alert('Passed data: ' + JSON.stringify(data))}>Click Me</button>
)

// ============================================================================
// ********************************* QUERIES **********************************
// ============================================================================
export const GET_ALL_FILMS = `
  {
    allFilms {
      title
      producers
      releaseDate
    }
  }
`

export const GET_ALL_PERSONS = `
  {
    allPersons {
      name
      gender
      height
      birthYear
    }
  }
`

// ============================================================================
// ************************** COLUMN CONFIGURATIONS ***************************
// ============================================================================

export const CUSTOM_COLUMNS = [
  {
    id: 'releaseDate',
    component: (data) => moment(data).format('MMM D, YYYY'),
    nodeStyle: (data) => {
      if (moment(data.releaseDate).isBefore('1993-01-01')) return 'blue-header'
    }
  },
  { id: 'title', label: 'Movie Title' },
  'producers',
  {
    id: 'action',
    customColumn: true,
    component: (data) => <Button data={data}/>,
    headerStyle: 'blue-header'
  }
]