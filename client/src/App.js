import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Login from './components/Login';
import Charcards from './components/Charcards';

function App() {

  const [loginSelected, setLoginSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        loginSelected = {loginSelected}
        setLoginSelected = {setLoginSelected}
       ></Nav>
      <main>
        {!loginSelected ? (
          <>
            <Library></Library>
            <Charcards></Charcards>
          </>
        ) : (
          <Login></Login>
        )}
      </main>
    </div>
  );
}

export default App;
