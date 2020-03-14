import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from "react-router-dom";

// needed to connect to GraphQl endpoint
// and for the TableQL to work
const client = new ApolloClient({
  // uri: "http://localhost:37850" // use this for testing SWAPI local
  // uri: "https://api.graphcms.com/simple/v1/swapi"
  uri: "https://swapi.graph.cool"
});

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  ),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
