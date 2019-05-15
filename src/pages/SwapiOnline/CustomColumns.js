import React from 'react'
import TableQL from 'react-tableql'
import { GET_ALL_FILMS, CUSTOM_COLUMNS } from '../../queries/SwapiOnlineQueries'

const CustomColumns = () => (
  <>
    <h4>Custom Columns</h4>
    <TableQL query={GET_ALL_FILMS} columns={CUSTOM_COLUMNS}/>
  </>
)

export default CustomColumns