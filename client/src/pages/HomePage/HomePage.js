import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { StateContext } from '../../App';

const HomePage = () => {
  const state = useContext(StateContext);

  if (!state.token) {
    return <Navigate to="/login" />;
  }

  return <div>HomePage</div>;
};

export default HomePage;
