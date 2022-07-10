import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
//import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Login from './components/Login';
import Charcards from './components/Charcards';
import CharacterSheet from './components/CharacterSheet';

function App() {

  const [loginSelected, setLoginSelected] = useState(false);

  return (
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
