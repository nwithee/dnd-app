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
          <form id="login-form" onSubmit = {handleSubmit}>
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
            <Button content = "Sign Up!"></Button>
            <div>
              <span>Need to create a new account?  Click </span>
              <Button content = "Here!"></Button>
            </div>
          </form>
        </MainContainer>
      )

}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
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

const LoginText = styled.h2`
  margin: 5px 0 20px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export default Login;