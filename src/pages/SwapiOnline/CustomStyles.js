import React from 'react'
import { ApolloTableQL } from 'react-tableql'

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
    <ApolloTableQL query={GET_ALL_FILMS} styles={styles} />
  </>
)

export default CustomStyles
