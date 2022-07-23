import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { StateContext } from '../App';

const AuthorizedRoute = (props) => {
  const { element } = props;
  const state = useContext(StateContext);

  if (!state.token) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default AuthorizedRoute;
