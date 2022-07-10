import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../CSS/Button';
import { validateEmail } from '../../utils/helpers';

function Login() {
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    const { email, password } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
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
              setErrorMessage(`Your password is required.`);
            } else {
              setErrorMessage('');
            }
          }
        
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.password]: e.target.value });
          }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <MainContainer>
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
              <Button content = "Sign Up!"></Button>
            </ButtonContainer>
            <ButtonContainer>
                <span>Need to create a new account?  Click </span>
                <Button content = "Here!"></Button>
            </ButtonContainer>
        </MainContainer>
      )

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
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default Login;