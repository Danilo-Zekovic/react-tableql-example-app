import React from 'react'
import { ApolloTableQL } from 'react-tableql'
import { GET_ALL_PERSONS } from '../../queries/SwapiOnlineQueries'

const DefaultPagination = () => (
  <>
    <h4>Default Pagination</h4>
    <ApolloTableQL query={GET_ALL_PERSONS} pagination/>
  </>
)

export default DefaultPagination