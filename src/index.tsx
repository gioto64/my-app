import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/pages/ErrorPage';
import { Rome } from './components/pages/Rome';
import { RepublicPage } from './components/pages/RepublicPage';
import { EmpirePage } from './components/pages/EmpirePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"rome",
        element: <Rome/>
      }, {
       path: "republic",
       element: <RepublicPage /> 
      },
      {
        path: "empire",
        element: <EmpirePage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
