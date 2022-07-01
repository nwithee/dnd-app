import React, { useEffect } from 'react';
//import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    loginSelected,
    setLoginSelected
  } = props;

    return (
        <nav class ="navbar">
          <a class ="light" href="/"><span role="img" aria-label="camera"> 🐉 </span> D&D Character Creator</a>
            <ul>
                <li>
                    <a class="light" href="/dashboard">Dashboard</a>
                </li>
                <li>
                    <a id="logout" href="/login">Logout</a>
                </li>
                <li>
                    <a class="light right" onClick ={() => setLoginSelected(true)}>Login</a>
                </li>
            </ul>
        </nav>
    );
  }

export default Nav;