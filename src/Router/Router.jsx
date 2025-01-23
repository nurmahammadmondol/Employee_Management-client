import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import HomePageContain from '../Components/Home/HomePageContain';
import NewsDetails from '../Components/Main/LatestNews/NewsDetails';

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
        path: '/NewsDetails/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/latest-news/${params.id}`),
      },
    ],
  },
]);

export default Router;
