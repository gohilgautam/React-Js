import { createBrowserRouter } from 'react-router'
import AdminLayout from '../Components/AdminLayout'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Admin/Dashboard'
import Customers from '../Pages/Admin/Customers'
import Orders from '../Pages/Admin/Orders'
import Tailors from '../Pages/Admin/Tailors'
import Measurements from '../Pages/Admin/Measurements'
import Inventory from '../Pages/Admin/Inventory'
import Payments from '../Pages/Admin/Payments'
import Reports from '../Pages/Admin/Reports'
import Notifications from '../Pages/Admin/Notifications'
import Settings from '../Pages/Admin/Settings'

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'tailors',
        element: <Tailors />,
      },
      {
        path: 'measurements',
        element: <Measurements />,
      },
      {
        path: 'inventory',
        element: <Inventory />,
      },
      {
        path: 'payments',
        element: <Payments />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])

