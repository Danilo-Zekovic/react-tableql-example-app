import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { GET_ALL_FILMS } from '../../queries/SwapiOnlineQueries'

const OnRowCLick = () => (
  <>
    <h4>On Row Click</h4>
    <ApolloTableQL query={GET_ALL_FILMS} onRowClick={ data => alert('Returned data: ' + JSON.stringify(data)) } />
  </>
)

export default OnRowCLick
