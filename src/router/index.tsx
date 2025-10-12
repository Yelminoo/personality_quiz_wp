import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WhatThisQuizIs from '../pages/WhatThisQuizIs';
import PersonalityForm from '../pages/PersonalityForm';
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WhatThisQuizIs />,
      },
      {
        path: 'quiz',
        element: <PersonalityForm />,
      },
      {
        path: 'about',
        element: <WhatThisQuizIs />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}