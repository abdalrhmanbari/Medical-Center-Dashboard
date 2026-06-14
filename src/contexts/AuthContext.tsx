import React, { createContext, useContext, useState } from 'react'
import type { User, UserRole } from '@/types'

const MOCK_USERS: Record<UserRole, User> = {
  super_admin: {
    id: '1',
    name: 'Dr. Ahmed Al-Rashid',
    email: 'admin@medcenter.com',
    role: 'super_admin',
    department: 'Administration',
  },
  receptionist: {
    id: '2',
    name: 'Sara Al-Khalid',
    email: 'reception@medcenter.com',
    role: 'receptionist',
    department: 'Front Desk',
  },
  doctor: {
    id: '3',
    name: 'Dr. Omar Hassan',
    email: 'doctor@medcenter.com',
    role: 'doctor',
    department: 'Internal Medicine',
  },
  lab_staff: {
    id: '4',
    name: 'Layla Ibrahim',
    email: 'lab@medcenter.com',
    role: 'lab_staff',
    department: 'Laboratory',
  },
  dental_staff: {
    id: '5',
    name: 'Dr. Fatima Noor',
    email: 'dental@medcenter.com',
    role: 'dental_staff',
    department: 'Dental',
  },
}

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  currentRole: UserRole
  switchRole: (role: UserRole) => void
  login: (role: UserRole) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<UserRole>('super_admin')
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const user = isAuthenticated ? MOCK_USERS[currentRole] : null

  const switchRole = (role: UserRole) => setCurrentRole(role)
  const login = (role: UserRole) => {
    setCurrentRole(role)
    setIsAuthenticated(true)
  }
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, currentRole, switchRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
