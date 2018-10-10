import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import { ApolloProvider } from 'react-apollo'

// needed to connect to GraphQl endpoint
// and for the TableQL to work
const client = new ApolloClient({
  uri: "http://localhost:40497"
});

// client
//   .query({
//     query: gql`
//       {
//         film(id:1,filmID:1){
//           title
//         }
//       }
//     `
//   })
//   .then(result => console.log(result))

// client
//   .query({
//     query: gql`
//       {allFilms(first:7){
//         films{
//           title
//         }
//       }}
//     `
//   })
//   .then(result => console.log(result))

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
