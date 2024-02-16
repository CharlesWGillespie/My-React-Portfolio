import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/projects',
        element: <ProjectPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
