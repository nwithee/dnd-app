import React, { useEffect } from 'react';
import styled from 'styled-components';

//CSS Styling
const Navbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-conent: space-around;
  align-items: center;
  font-size: 2em;
  color: black;
  a:link {text-decoration: none;}
  a {color: black;}
  cursor: pointer;
`;

function Nav(props) {
  const {
    loginSelected,
    setLoginSelected
  } = props;

    return (
        <Navbar>
          <div>
            <a href="/"><span role="img" label="dragon"> 🐉 </span> D&D Character Creator<span role="img" label="dragon"> 🐉 </span></a>
          </div>
          <div>
            <span onClick ={() => setLoginSelected(true)}>Login</span>
          </div>
        </Navbar>
    );
  }

export default Nav;