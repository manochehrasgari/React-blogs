import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient , ApolloProvider , InMemoryCache} from "@apollo/client"
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

import './styles/fonts.css';
import './styles/index.css';

const client = new ApolloClient({
  uri : process.env.REACT_APP_GRAPHQL_URI ,
  cache : new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
  
);

