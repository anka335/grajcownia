import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedGuestRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !user?.isAnonymous && user.uid !== undefined) {
    return <Navigate to='/userlayout/mainuserpage' />;
  } else if (user?.isAnonymous) {
    return <Navigate to='/guestlayout/mainguestpage' />;
  }
  return children;
};

export default ProtectedGuestRoute;
