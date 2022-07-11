import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
//import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Login from './components/Login';
import Charcards from './components/Charcards';
import CharacterSheet from './components/CharacterSheet';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  const [loginSelected, setLoginSelected] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav
          loginSelected = {loginSelected}
          setLoginSelected = {setLoginSelected}
        ></Nav>
        <Main>
          {!loginSelected ? (
            <>
              <Library></Library>
              <Charcards></Charcards>
              {/* CharacterSheet is in the wrong place */}
              <CharacterSheet></CharacterSheet> 
            </>
          ) : (
            <Login></Login>
          )}
          
        </Main>
      </div>
    </ApolloProvider>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
  padding: 20px;
`;

export default App;
