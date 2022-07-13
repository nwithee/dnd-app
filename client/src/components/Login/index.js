import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../CSS/Button';
//import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';
import { validateEmail } from '../../utils/helpers';
import Signup from '../Signup';



function Login() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const { username, email, password } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    //Code for validating input
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`A ${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
        
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    //Code for switching between login and signup
    const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false);

    const loginHandler = () => {
        setLogin(true);
        setSignup(false);
    };
    const signupHandler = () => {
        setLogin(false);
        setSignup(true);
    };

    //Code for capturing user details

    return (
        <MainContainer>
            <ButtonContainer>
                <button content = "Login" onClick={loginHandler}>
                    Login</button>
                <button onClick={signupHandler}>
                    Signup</button>
            </ButtonContainer>
            {login && (
                <>
                <LoginText>Login</LoginText>
                <InputContainer>
                    <label htmlFor="email">Email address</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />

                    <label htmlFor="password">Password</label>
                    <input type="text" defaultValue={password} onBlur={handleChange} name="password" />
                </InputContainer>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <ButtonContainer>
                    <Button content = "Login!"></Button>
                </ButtonContainer>
                </>
            )}
            {signup && (
                <>
                <LoginText>Signup</LoginText>
                  <Signup></Signup>
                </>
            )}
        </MainContainer>
    );
}


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: #f9f7f4 !important;
  background-color: #f9f7f4 !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 20px;
  font-family: "Cinzel Decorative", cursive;
  color: black;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const LoginText = styled.h1`
  margin: 5px 0 20px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export default Login;