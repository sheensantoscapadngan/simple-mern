import React, { useContext, useState } from 'react';
import LogInContainer from './components/LogInContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../App';

const UserLogin = () => {
  const [logIn, setLogIn] = useState(true);
  const { setState } = useContext(StateContext);

  const navigate = useNavigate();

  const handleChange = () => setLogIn(!logIn);

  const handleLogIn = async (username, password) => {
    const response = await axios.post(
      'http://localhost:5000/api/v1/user/login',
      {
        username: username,
        password: password,
      }
    );
    const data = response.data;
    setState({ token: data.token });
    navigate('/');
  };

  const handleSignUp = async (username, password) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/user/sign-up',
        {
          username: username,
          password: password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleSubmit = (username, password) => {
    if (username && password) {
      if (logIn) {
        return handleLogIn(username, password);
      }
      handleSignUp(username, password);
    }
  };
  return (
    <>
      <LogInContainer
        logIn={logIn}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UserLogin;
