import React from 'react';
import { TextInput, Button } from '../input';

const LoginForm = ({
  email, onTextInputChange, submit, password, id
}) => {
  return (
    <div className='auth-form'>
      <form id={id} onSubmit={submit}>
        <div>
          <TextInput
            id='loginEmail'
            type='email'
            placeholder='Email'
            value={email}
            className='auth-input-field'
            handleChange={onTextInputChange}
          />
        </div>
        <div>
          <TextInput
            id='loginPassword'
            type='password'
            placeholder='Password'
            value={password}
            className='auth-input-field'
            handleChange={onTextInputChange}
          />
        </div>
          <Button
            id='loginButton'
            type='submit'
            title='Login'
            className='auth-submit-btn'
          />
      </form>
    </div>
  );
}

export default LoginForm;
