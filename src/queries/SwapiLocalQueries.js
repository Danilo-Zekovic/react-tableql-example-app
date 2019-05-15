// ============================================================================
// ********************************* QUERIES **********************************
// ============================================================================
export const GET_ALL_FILMS = `
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

export const GET_ALL_PEOPLE = `
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
// ============================================================================
// ************************** COLUMN CONFIGURATIONS ***************************
// ============================================================================

// example how to control the order of the columns
export const COLUMNS_ORDER = ['episodeID', 'title', 'releaseDate' ]

// more complex example
export const COLUMNS = [
  {
    id: 'episodeID',
    label: 'Episode Identification',
  },
  'releaseDate',
  'title'
]

export const COLUMNS_PEOPLE = [
  'name', 'gender', 'eyeColor', 'birthYear',
  {
    id:'filmConnection.pageInfo.hasNextPage',
    label:'Has Next Page'
  }
]