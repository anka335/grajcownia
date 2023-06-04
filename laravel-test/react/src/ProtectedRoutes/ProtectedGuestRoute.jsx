import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedGuestRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !user?.isAnonymous && user.uid !== undefined) {
    console.log("(guest check) go to user mainpage user: ", user);
    return <Navigate to='/userlayout/mainuserpage' />;
  } else if (user?.isAnonymous) {
    console.log("(guest check) go to anonymout user mainpage user: ", user);
    return <Navigate to='/guestlayout/mainguestpage' />;
  }
  return children;
};

export default ProtectedGuestRoute;
