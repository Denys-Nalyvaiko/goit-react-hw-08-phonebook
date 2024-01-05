import { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import { FormBox, TextInput } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const options = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();

    const currentUser = { name, email, password };
    console.log(currentUser);

    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    options[name](value);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormBox
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '32ch',
          input: { color: '#f6d9b1' },
        },
      }}
      action="submit"
      onSubmit={handleFormSubmit}
    >
      <TextInput
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        required
        onChange={handleInputChange}
      />
      <TextInput
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        id={emailInputId}
        value={email}
        required
        onChange={handleInputChange}
      />
      <TextInput
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        id={passwordInputId}
        value={password}
        required
        onChange={handleInputChange}
      />
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </FormBox>
  );
};

export default RegisterForm;
