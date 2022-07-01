import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Login from './components/Login';
import Characters from './components/Characters';

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
            <Characters></Characters>
          </>
        ) : (
          <Login></Login>
        )}
      </main>
    </div>
  );
}

export default App;
