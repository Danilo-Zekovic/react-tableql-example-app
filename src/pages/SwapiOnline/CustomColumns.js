import React from 'react'
import { ApolloTableQL } from 'react-tableql'
import { GET_ALL_FILMS, CUSTOM_COLUMNS } from '../../queries/SwapiOnlineQueries'

const CustomColumns = () => (
  <>
    <h4>Custom Columns</h4>
    <ApolloTableQL query={GET_ALL_FILMS} columns={CUSTOM_COLUMNS}/>
  </>
)

export default CustomColumns