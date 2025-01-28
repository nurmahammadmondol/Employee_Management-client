import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRootInHR = ({ children }) => {
  const location = useLocation();
  const { User, AllUser, loading, LogOutUser } = useContext(AuthContext); // LogOutUser function added

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <small className="text-center mb-1">Loading...</small>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (User) {
    const userRoleChecked = AllUser.find(
      checkUser => checkUser.Email === User.email
    );

    if (userRoleChecked?.UserRole === 'HR') {
      return children;
    } else {
      // If user is not HR, log them out and redirect to Login Page
      LogOutUser()
        .then(() => {
          return (
            <Navigate
              to="/LoginPage"
              state={{ from: location }}
              replace
            ></Navigate>
          );
        })
        .catch(error => {
          console.error('Logout failed:', error);
        });
    }
  }

  return (
    <Navigate to="/LoginPage" state={{ from: location }} replace></Navigate>
  );
};

export default PrivetRootInHR;
