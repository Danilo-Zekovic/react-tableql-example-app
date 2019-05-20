import React from 'react'
import {ApolloTableQL} from 'react-tableql'
import { GET_ALL_FILMS } from '../../queries/SwapiOnlineQueries'

const Basic = () => (
  <>
    <h4>Basic</h4>
    <ApolloTableQL query={GET_ALL_FILMS} />
  </>
)

export default Basic