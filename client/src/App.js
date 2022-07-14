import React, { useState } from "react";
import styled from "styled-components";
//import './App.css';
import Nav from "./components/Nav";
import Library from "./components/Library";
import AuthPage from "./components/AuthPage";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loginSelected, setLoginSelected] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav
          loginSelected={loginSelected}
          setLoginSelected={setLoginSelected}
        ></Nav>
        <Main>
          {!loginSelected ? (
            <>
              <Library></Library>
            </>
          ) : (
            <AuthPage></AuthPage>
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
