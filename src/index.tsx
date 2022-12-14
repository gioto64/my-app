import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginPage } from './components/pages/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUpPage } from './components/pages/SignUpPage';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { Dashboard } from './components/Dashboard';
import { FrontPage } from './components/pages/FrontPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <FrontPage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/signup',
      element: <SignUpPage />
    }
  ])
root.render(
    <Provider theme={defaultTheme} colorScheme={'light'}>
    <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
