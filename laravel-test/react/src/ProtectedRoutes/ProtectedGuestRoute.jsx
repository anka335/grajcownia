import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedGuestRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to='/mainuserpage' />;
  }
  return children;
};

export default ProtectedGuestRoute;
