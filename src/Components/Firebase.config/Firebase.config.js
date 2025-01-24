// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEPAyKbZ9amZnUNhLqKrr-iUNOy4HPfRI',
  authDomain: 'employeemanagement-c8fee.firebaseapp.com',
  projectId: 'employeemanagement-c8fee',
  storageBucket: 'employeemanagement-c8fee.firebasestorage.app',
  messagingSenderId: '843799675578',
  appId: '1:843799675578:web:45eeff05661f7d6c44b883',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
