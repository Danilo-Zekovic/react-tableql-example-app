import React from 'react'
import TableQL from 'react-tableql'
import { GET_ALL_PERSONS } from '../../queries/SwapiOnlineQueries';

const CustomPagination = () => (
  <>
    <h4>Custom Pagination</h4>
    <TableQL
      query={GET_ALL_PERSONS}
      pagination={{
        pageLimit: 5,
        pageNeighbors: 2,
        currentPage: 1,
      }}/>
  </>
)

export default CustomPagination