import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedAnonUserRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !(user?.isAnonymous)) {
    console.log("anon (user)");
    return <Navigate to='/mainuserpage' />;
  } else if (!user) {
    console.log("anon (start)");
    return <Navigate to='/starterpage' />;
  }
  return children;
};

export default ProtectedAnonUserRoute;
