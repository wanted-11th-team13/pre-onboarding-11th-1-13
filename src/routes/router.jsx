// import { createBrowserRouter } from 'react-router-dom';
// import Root from './root';
// import App from '../App';
// import SignInPage from '../pages/SignInPage';
// import SignUpPage from '../pages/SignUpPage';
// import TodoListPage from '../pages/TodoListPage';
// import NotFoundPage from '../pages/NotFoundPage';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <NotFoundPage />,
//     children: [
//       { index: true, path: '/', element: <App /> },
//       {
//         path: '/signin',
//         element: <SignInPage />,
//       },
//       {
//         path: '/signup',
//         element: <SignUpPage />,
//       },
//       {
//         path: '/todo',
//         element: <TodoListPage />,
//       },
//     ],
//   },
// ]);

import { createBrowserRouter } from 'react-router-dom';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import TodoListPage from '@/pages/TodoListPage';
import NotFoundPage from '@/pages/NotFoundPage';
import App from '@/App';
import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, path: '/', element: <App /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/signin', element: <SignInPage /> },
      { path: '/todo', element: <TodoListPage /> },
    ],
  },
]);
