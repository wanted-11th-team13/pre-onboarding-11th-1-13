import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import GlobalStyle from '@/GlobalStyle';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
