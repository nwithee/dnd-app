import React, { useEffect } from 'react';
import styled from 'styled-components';
import Auth from '../../utils/auth';

//CSS Styling
const Navbar = styled.nav`
  font-family: "Cinzel Decorative";
  background: #f9f7f4 !important;
  background-color: #f9f7f4 !important;  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  color: black;
  a:link {text-decoration: none;}
  a {color: black;}
  cursor: pointer;
  box-shadow: 2px 3px 20px black, 0 0 53px #8a4d0f inset;
  filter: url(#wavy2);
  text-shadow: 2px 2px 3px rgb(255 255 255 / 50%);
  padding: 5px;
`;

function Nav(props) {
  const {
    loginSelected,
    setLoginSelected
  } = props;

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

    return (
        <Navbar>
          <div>
            <a href="/"><span role="img" label="dragon"> 🐉 </span> D&D Character Creator<span role="img" label="dragon"> 🐉 </span></a>
          </div>
          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}> Logout</a>
            </>
          ) : (
          <div>
            <span onClick ={() => setLoginSelected(true)}>Login</span>
          </div>
          )}
        </Navbar>
    );
  }


export default Nav;

