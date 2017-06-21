import React from 'react';
import { TextInput, Button } from '../input';

const SignupForm = ({
  email, password, username, submit, onTextInputChange, id
}) => {
  return (
    <div className='auth-form'>
      <form id={id} onSubmit={submit}>
        <div>
          <TextInput
            id='signupEmail'
            type='email'
            placeholder='Email'
            value={email}
            className='auth-input-field'
            handleChange={onTextInputChange}
          />
        </div>
         <div>
          <TextInput
            id='signupUsername'
            type='text'
            placeholder='Username'
            value={username}
            className='auth-input-field'
            handleChange={onTextInputChange}
          />
        </div>
        <div>
          <TextInput
            id='signupPassword'
            type='password'
            placeholder='Password'
            value={password}
            className='auth-input-field'
            handleChange={onTextInputChange}
          />
        </div>
          <Button
            id='signupButton'
            type='submit'
            title='Signup'
            className='auth-submit-btn'
          />
      </form>
    </div>
  );
}

export default SignupForm;
