import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import AboutMePage from './pages/AboutMePage.jsx';

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
        path: '/about-me',
        element: <AboutMePage />
      },
      {
        path: '/projects',
        element: <ProjectPage />
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
