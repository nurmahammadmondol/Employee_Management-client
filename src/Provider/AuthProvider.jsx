import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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

  const GoogleProvider = new GoogleAuthProvider();
  const CreateUserGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const LoginWithEmailPassword = (Email, Password) => {
    return signInWithEmailAndPassword(auth, Email, Password);
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
    CreateUserGoogle,
    LoginWithEmailPassword,
    User,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
