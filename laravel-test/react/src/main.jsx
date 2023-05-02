import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <div id='main'>
        <RouterProvider router={router}/>
      </div>
      </AuthContextProvider>
  </React.StrictMode>
)
