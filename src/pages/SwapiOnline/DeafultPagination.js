import React from 'react'
import { ApolloTableQL } from 'react-tableql'

import { GET_ALL_PERSONS } from '../../queries/SwapiOnlineQueries'
import Profiler from '../../components/Profiler';

const DefaultPagination = () => (
  <Profiler component="DefaultPagination">
    <h4>Default Pagination</h4>
    <ApolloTableQL query={GET_ALL_PERSONS} pagination/>
  </Profiler>
)

export default DefaultPagination