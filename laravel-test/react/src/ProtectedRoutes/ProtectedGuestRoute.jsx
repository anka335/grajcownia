import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedGuestRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !user?.isAnonymous) {
    console.log("start (user)");
    return <Navigate to='/mainuserpage' />;
  } else if (user?.isAnonymous) {
    console.log("start (anonymous)");
    return <Navigate to='/guestlayout/mainguestpage' />;
  }
  return children;
};

export default ProtectedGuestRoute;
