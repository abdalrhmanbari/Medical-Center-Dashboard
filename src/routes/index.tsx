import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { ProtectedLayout } from '@/layouts/ProtectedLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'
import Doctors from '@/pages/Doctors'
import Payroll from '@/pages/Payroll'
import Appointments from '@/pages/Appointments'
import Notifications from '@/pages/Notifications'
import Analytics from '@/pages/Analytics'
import Settings from '@/pages/Settings'
import Logs from '@/pages/Logs'
import Login from '@/pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { path: 'dashboard', element: <Dashboard /> },
              { path: 'users', element: <Users /> },
              { path: 'doctors', element: <Doctors /> },
              { path: 'payroll', element: <Payroll /> },
              { path: 'appointments', element: <Appointments /> },
              { path: 'notifications', element: <Notifications /> },
              { path: 'analytics', element: <Analytics /> },
              { path: 'settings', element: <Settings /> },
              { path: 'logs', element: <Logs /> },
            ],
          },
        ],
      },
    ],
  },
])
