import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Components/Firebase.config/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const CreateUserEmailPassword = (Email, Password) => {
    return createUserWithEmailAndPassword(auth, Email, Password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, carrentUser => {
      setUser(carrentUser);
      setLoading(false);
      console.log('Your account created successfully', carrentUser);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    CreateUserEmailPassword,
    User,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
