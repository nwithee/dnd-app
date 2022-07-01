import React, { useState } from 'react';
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
        <section>
          <h1>Login</h1>
          <form id="login-form" onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" defaultValue={password} onBlur={handleChange} name="password" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
      )

}

export default Login;