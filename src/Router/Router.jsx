import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import HomePageContain from '../Components/Home/HomePageContain';
import NewsDetails from '../Components/Main/LatestNews/NewsDetails';
import LoginPage from '../Components/Main/Authentication/Login/LoginPage';
import RegistrationPage from '../Components/Main/Authentication/Registration/RegistrationPage';
import RoutesForEmployees from '../Components/Main/Dashboard/ForEmployee/RoutesForEmployees';
import PrivetRoot from '../PrivetRoot/PrivetRoot';
import RoutersForHR from '../Components/Main/Dashboard/ForHR/RoutersForHR';
import HomeHR from '../Components/Main/Dashboard/ForHR/HomeHR';
import EmployeeList from '../Components/Main/Dashboard/ForHR/EmployeeList';
import PaymentRequest from '../Components/Main/Dashboard/ForHR/PaymentRequest';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    errorElement: <h4>Error 404</h4>,
    children: [
      {
        path: '/',
        element: <HomePageContain></HomePageContain>,
      },
      {
        path: '/DashboardEmployes',
        element: (
          <PrivetRoot>
            <RoutesForEmployees></RoutesForEmployees>
          </PrivetRoot>
        ),
      },
      {
        path: '/DashboardHR',
        element: (
          <PrivetRoot>
            <RoutersForHR></RoutersForHR>
          </PrivetRoot>
        ),
        children: [
          {
            path: '',
            element: <Navigate to="HomeHR" replace></Navigate>, // ডিফল্টভাবে রিডাইরেক্ট হবে HomeHR-এ।
          },
          {
            path: 'HomeHR',
            element: <HomeHR></HomeHR>,
          },
          {
            path: 'EmployeeList',
            element: <EmployeeList></EmployeeList>,
          },
          {
            path: 'PaymentRequest',
            element: <PaymentRequest></PaymentRequest>,
          },
        ],
      },

      {
        path: '/NewsDetails/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/latest-news/${params.id}`),
      },
      {
        path: '/LoginPage',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/RegistrationPage',
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
]);

export default Router;
