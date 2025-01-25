import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import HomePageContain from '../Components/Home/HomePageContain';
import NewsDetails from '../Components/Main/LatestNews/NewsDetails';
import LoginPage from '../Components/Main/Authentication/Login/LoginPage';
import RegistrationPage from '../Components/Main/Authentication/Registration/RegistrationPage';
import RoutesForEmployees from '../Components/Main/Dashboard/ForEmployee/RoutesForEmployees';

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
        element: <RoutesForEmployees></RoutesForEmployees>,
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
