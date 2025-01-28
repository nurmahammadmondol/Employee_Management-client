import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRootInHR = ({ children }) => {
  const location = useLocation();
  const { User, AllUser, loading, LogOutUser } = useContext(AuthContext);

  const [isChecking, setIsChecking] = useState(true); // State to handle role checking

  useEffect(() => {
    if (!loading && User && AllUser.length > 0) {
      const userRoleChecked = AllUser.find(
        checkUser => checkUser.Email === User.email
      );

      if (userRoleChecked?.UserRole !== 'Admin') {
        // If user is not HR, log them out
        LogOutUser()
          .then(() => {
            console.log('User logged out successfully.');
          })
          .catch(error => {
            console.error('Logout failed:', error);
          });
      } else {
        // If the user is HR, stop the role checking
        setIsChecking(false);
      }
    } else if (!loading && !User) {
      // If user is not logged in, stop the role checking
      setIsChecking(false);
    }
  }, [User, AllUser, loading, LogOutUser]);

  if (loading || isChecking) {
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

    if (userRoleChecked?.UserRole === 'Admin') {
      return children;
    }
  }

  return <Navigate to="/LoginPage" state={{ from: location }} replace />;
};

export default PrivetRootInHR;
