import React, { useState } from 'react';
import LogInContainer from './components/LogInContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLoginToken } from '../../utils/authSessionStorage';

const UserLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const navigate = useNavigate();

  const handleChange = () => setIsLoggingIn(!isLoggingIn);

  const handleLogIn = async (username, password) => {
    const response = await axios.post(
      'http://localhost:5000/api/v1/user/login',
      {
        username: username,
        password: password,
      }
    );
    const data = response.data;
    setLoginToken(data.token);
    navigate('/');
  };

  const handleSignUp = async (username, password) => {
    try {
      await axios.post('http://localhost:5000/api/v1/user/sign-up', {
        username: username,
        password: password,
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  const handleSubmit = (username, password) => {
    if (username && password) {
      if (isLoggingIn) {
        return handleLogIn(username, password);
      }
      handleSignUp(username, password);
    }
  };
  return (
    <>
      <LogInContainer
        isLoggingIn={isLoggingIn}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default UserLogin;
