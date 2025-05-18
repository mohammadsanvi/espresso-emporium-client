import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Context/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
    </AuthProvider>
  </HelmetProvider>
)
