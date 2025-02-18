import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Components/Firebase.config/Firebase.config';

import useAxiosSecuur from '../Components/Axios/useAxiosSecuur';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [AllUser, setAllUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const AxiosSecuur = useAxiosSecuur();

  const CreateUserEmailPassword = (Email, Password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, Email, Password);
  };

  const GoogleProvider = new GoogleAuthProvider();
  const CreateUserGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const LoginWithEmailPassword = (Email, Password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, Email, Password);
  };

  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, carrentUser => {
      setUser(carrentUser);
      setLoading(false);
      // // console.log('Your account created successfully', carrentUser);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  useEffect(() => {
    AxiosSecuur.get('/User')
      .then(res => {
        // // console.log(res.data);
        setAllUser(res.data);

        const userData = res.data;
        const userDataFind = userData.find(data => data?.Email === User?.email);

        // // console.log(userDataFind);

        if (userDataFind) {
          setUserData(userDataFind);
          // setUserData(userDataFind); // Uncomment if you want to set state
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error.message);
      });
  }, [User]);

  const authInfo = {
    CreateUserEmailPassword,
    CreateUserGoogle,
    LoginWithEmailPassword,
    LogOutUser,
    User,
    userData,
    AllUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
