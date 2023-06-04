import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const ProtectedAnonUserRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user && !(user?.isAnonymous) && user.uid !== undefined) {
    console.log("(anonymous user check) go to user mainpage user: ", user);
    return <Navigate to='/userlayout/mainuserpage' />;
  } else if (!user) {
    console.log("(anonymous user check) go to guest mainpage user: ", user);
    return <Navigate to='/starterpage' />;
  }
  return children;
};

export default ProtectedAnonUserRoute;
