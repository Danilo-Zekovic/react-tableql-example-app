import React from 'react'
import TableQL from 'react-tableql'

import { GET_ALL_FILMS } from '../../queries/SwapiOnlineQueries'

const styles = {
  table: '',
  thead: '',
  theadTr: 'bg-purple',
  theadTh: 'bg-yellow',
  tbody: '',
  tbodyTr: 'bg-green',
  tbodyTd: 'bg-red',
}

const CustomStyles = () => (
  <>
    <h4>Custom Styles</h4>
    <TableQL query={GET_ALL_FILMS} styles={styles} />>
  </>
)

export default CustomStyles
