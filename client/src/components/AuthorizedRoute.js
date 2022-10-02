import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { StateContext } from '../App';

const AuthorizedRoute = (props) => {
  const { children } = props;
  const { state } = useContext(StateContext);

  if (!state.token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthorizedRoute;
