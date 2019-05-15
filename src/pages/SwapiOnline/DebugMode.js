import React from 'react'
import TableQL from 'react-tableql'

import { GET_ALL_FILMS } from '../../queries/SwapiOnlineQueries'

const DebugMode = () => (
  <>
    <h4>Debug Mode</h4>
    <p>Open your developers tools and see console</p>
    <TableQL query={GET_ALL_FILMS} debug />
  </>
)

export default DebugMode
