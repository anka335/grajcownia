import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedUserRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    console.log("(user check) go to guest mainpage user: ", user);
    return <Navigate to='/starterpage' />;
  } else if (user?.isAnonymous) {
    console.log("(user check) go to anonymous user mainpage user: ", user);
    return <Navigate to='/guestlayout/mainguestpage' />;
  }
  return children;
};

export default ProtectedUserRoute;
