import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedAnonUserRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !(user?.isAnonymous)) {
    return <Navigate to='/mainuserpage' />;
  } else if (!user) {
    return <Navigate to='/starterpage' />;
  }
  return children;
};

export default ProtectedAnonUserRoute;
