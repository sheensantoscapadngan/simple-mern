import React from 'react';
import { Navigate } from 'react-router';

const AuthorizedRoute = (props) => {
  const { children } = props;
  const loginToken = sessionStorage.getItem('loginToken');

  if (!loginToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthorizedRoute;
