import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
          <div>
            <form onSubmit={handleFormSubmit}>
              <InputContainer>
                <label htmlFor = "email">Email Address</label>
                <Input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <label htmlFor = "password">Password</label>
                <Input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                />
              </InputContainer>

              <ButtonContainer>
                <Button type="submit">Login!</Button>
              </ButtonContainer>
            </form>

            {error && <div>Login failed</div>}
          </div>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 25px;
  border-color: brown;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

const Button = styled.button`
  font-family: "Cinzel Decorative";
  margin: 10px;
  background-color: #8fa189;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-weight: bold;
  border: solid 5px #000;
  border-width: 0 4px 5px 0;
  border-radius: 5px;
  border-color: transparent #6c7b67 #7f8f79 transparent;
  background-clip: padding-box;
  text-shadow: 2px 2px 3px rgb(255 255 255 / 50%);
  color: black;
  width: fit-content;
  cursor: pointer;
  &:hover {
      border-width: 0 2px 3px 0;
      margin-right: 4px;
      position: relative;
      left: 2px;
      top: 3px;
}
`

export default Login;