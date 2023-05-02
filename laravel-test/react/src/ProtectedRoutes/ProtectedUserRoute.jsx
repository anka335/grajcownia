import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedUserRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/starterpage' />;
  }
  return children;
};

export default ProtectedUserRoute;
