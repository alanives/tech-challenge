import { createBrowserRouter } from 'react-router-dom';

import TablePage from '../pages/TablePage';
import UserPage from '../pages/UserPage';
import IndexPage from '../pages/IndexPage';

import App from '../App';

/**
 * This app uses react router to manage routes.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <IndexPage />,
      },
      {
        path: '/table',
        element: <TablePage />,
      },
      {
        path: '/user',
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
