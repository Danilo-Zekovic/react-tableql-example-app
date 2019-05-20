import React from 'react'
import { Route, Link } from 'react-router-dom'
import Basic from './Basic'
import DefaultPagination from './DeafultPagination'
import CustomPagination from './CustomPagination'
import CustomColumns from './CustomColumns'
import CustomStyles from './CustomStyles'
import DebugMode from './DebugMode'
import OnRowCLick from './OnRowClick'

const SwapiOnline = () => (
  <>
    <h1><a href="https://graphiql.graphcms.com/simple/v1/swapi" target="blank">SWAPI Online ApolloTableQL</a></h1>

    <Link to="/tableql/basic">Basic/Default</Link>
    <Link to="/tableql/default-pagination">Default Pagination</Link>
    <Link to="/tableql/custom-pagination">Custom Pagination</Link>
    <Link to="/tableql/custom-column">Custom Columns</Link>
    <Link to="/tableql/custom-styles">Custom Styles</Link>
    <Link to="/tableql/debug-mode">Debug Mode</Link>
    <Link to="/tableql/on-row-click">Clickable Row</Link>

    <Route path="/tableql/basic" component={Basic} />
    <Route path="/tableql/default-pagination" component={DefaultPagination} />
    <Route path="/tableql/custom-pagination" component={CustomPagination}/>
    <Route path="/tableql/custom-column" component={CustomColumns} />
    <Route path="/tableql/custom-styles" component={CustomStyles} />
    <Route path="/tableql/debug-mode" component={DebugMode} />
    <Route path="/tableql/on-row-click" component={OnRowCLick} />
  </>
)

export default SwapiOnline