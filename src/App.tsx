import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AllDevelopers from './pages/AllDevelopers'
import Signup from './pages/Signup'
import OnboardDeveloper from './pages/OnboardDeveloper'
import ProtectedRoute from './pages/ProtectedRoute'
import ProtectedRouteAdminRoute from './pages/ProtectedAdminRoute'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: (
        <Login></Login>
      )
    }, {
      path: '/',
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      )
    },
    {
      path: '/onBoard',
      element: (
        <OnboardDeveloper />
      )
    },
    {
      path: '/getAllDevelopers',
      element: (
        <ProtectedRouteAdminRoute>
          <AllDevelopers />
        </ProtectedRouteAdminRoute>
      )
    },
    {
      path: '/signup',
      element: (
        <Signup />
      )
    }
  ])
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App