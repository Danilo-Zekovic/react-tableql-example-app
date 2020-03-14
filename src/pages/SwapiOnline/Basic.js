import React from 'react'
import {ApolloTableQL} from 'react-tableql'

import { GET_ALL_FILMS } from '../../queries/SwapiOnlineQueries'
import Profiler from '../../components/Profiler'

const Basic = () => (
  <Profiler component="Basic">
    <h4>Basic</h4>
    <ApolloTableQL query={GET_ALL_FILMS} />
  </Profiler>
)

export default Basic
