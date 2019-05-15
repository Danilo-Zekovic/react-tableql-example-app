import React from 'react'
import TableQL from 'react-tableql'
import { GET_ALL_PERSONS } from '../../queries/SwapiOnlineQueries'

const DefaultPagination = () => (
  <>
    <h4>Default Pagination</h4>
    <TableQL query={GET_ALL_PERSONS} pagination/>
  </>
)

export default DefaultPagination