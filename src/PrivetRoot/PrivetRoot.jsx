import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoot = ({ children }) => {
  const location = useLocation();
  const { User, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <small className="text-center mb-1">Loading...</small>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (User) {
    return children;
  }

  return (
    <Navigate to="/LoginPage" state={{ from: location }} replace></Navigate>
  );
};

export default PrivetRoot;
