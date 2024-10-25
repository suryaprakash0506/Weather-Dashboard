// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// If using React Router, you can create a router like this
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* If not using React Router, simply use */}
    {/* <App /> */}
  </React.StrictMode>
);
