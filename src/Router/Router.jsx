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
import EmployeDetails from '../Components/Main/Dashboard/ForHR/EmployeDetails';
import WorkRecords from '../Components/Main/Dashboard/ForHR/WorkRecords';
import RouterForAdmin from '../Components/Main/Dashboard/ForAdmin/RoutersForAdmin/RouterForAdmin';
import AllEmployeeList from '../Components/Main/Dashboard/ForAdmin/AllEmployeeList';
import PayEmployeesSalary from '../Components/Main/Dashboard/ForAdmin/PayEmployeesSalary';

import ContactUs from '../Components/ContactUs/ContactUs';
import AboutUs from '../Components/About/AboutUs';
import PrivetRootInHR from '../PrivetRoot/PrivetRootInHR';
import PrivetRootInAdmin from '../PrivetRoot/PrivetRootInAdmin';
import HomeAdmin from '../Components/Main/Dashboard/ForAdmin/RoutersForAdmin/HomeAdmin';
import AttendanceTracker from '../Components/Main/Dashboard/ForAdmin/AttendanceTracker';

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
            <PrivetRootInHR>
              <RoutersForHR></RoutersForHR>
            </PrivetRootInHR>
          </PrivetRoot>
        ),
        children: [
          {
            path: '',
            element: <Navigate to="HomeHR" replace></Navigate>, // ডিফল্টভাবে রিডাইরেক্ট হবে HomeHR-এ।
          },
          {
            path: 'HomeHR',
            element: (
              <PrivetRootInHR>
                <HomeHR></HomeHR>
              </PrivetRootInHR>
            ),
          },
          {
            path: 'EmployeeList',
            element: (
              <PrivetRootInHR>
                <EmployeeList></EmployeeList>
              </PrivetRootInHR>
            ),
          },
          {
            path: 'WorkRecords',
            element: (
              <PrivetRootInHR>
                <WorkRecords></WorkRecords>
              </PrivetRootInHR>
            ),
            loader: () =>
              fetch(
                'https://employee-management-server-two-eight.vercel.app/WorkSheet'
              ),
          },
          {
            path: 'PaymentRequest',
            element: (
              <PrivetRootInHR>
                <PaymentRequest></PaymentRequest>
              </PrivetRootInHR>
            ),
            loader: () =>
              fetch(
                'https://employee-management-server-two-eight.vercel.app/Payment_Request'
              ),
          },
          {
            path: 'EmplayeDetails/:id',
            element: (
              <PrivetRootInHR>
                <EmployeDetails></EmployeDetails>
              </PrivetRootInHR>
            ),
            loader: ({ params }) =>
              fetch(
                `https://employee-management-server-two-eight.vercel.app/User/${params.id}`
              ),
          },
        ],
      },
      {
        path: '/DashboardAdmin',
        element: (
          <PrivetRoot>
            <PrivetRootInAdmin>
              <RouterForAdmin></RouterForAdmin>
            </PrivetRootInAdmin>
          </PrivetRoot>
        ),
        children: [
          {
            path: '',
            element: <Navigate to="HomeAdmin" replace></Navigate>,
          },
          {
            path: 'HomeAdmin',
            element: (
              <PrivetRootInAdmin>
                <HomeAdmin></HomeAdmin>
              </PrivetRootInAdmin>
            ),
          },
          {
            path: 'AllEmployeeList',
            element: (
              <PrivetRootInAdmin>
                <AllEmployeeList></AllEmployeeList>
              </PrivetRootInAdmin>
            ),
          },
          {
            path: 'WorkRecords',
            element: (
              <PrivetRootInAdmin>
                <WorkRecords></WorkRecords>
              </PrivetRootInAdmin>
            ),
            loader: () =>
              fetch(
                'https://employee-management-server-two-eight.vercel.app/WorkSheet'
              ),
          },
          {
            path: 'AttendanceTracker',
            element: (
              <PrivetRootInAdmin>
                <AttendanceTracker></AttendanceTracker>
              </PrivetRootInAdmin>
            ),
            loader: () =>
              fetch(
                'https://employee-management-server-two-eight.vercel.app/User'
              ),
          },
          {
            path: 'PayEmployeesSalary',
            element: (
              <PrivetRootInAdmin>
                <PayEmployeesSalary></PayEmployeesSalary>
              </PrivetRootInAdmin>
            ),
          },
        ],
      },
      {
        path: '/NewsDetails/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://employee-management-server-two-eight.vercel.app/latest-news/${params.id}`
          ),
      },
      {
        path: '/AboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/ContactUs',
        element: <ContactUs></ContactUs>,
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
