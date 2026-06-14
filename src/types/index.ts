export type UserRole = 'super_admin' | 'receptionist' | 'doctor' | 'lab_staff' | 'dental_staff'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  department?: string
}

export interface NavItem {
  id: string
  label: string
  labelAr: string
  icon: string
  path: string
  badge?: number | string
}

export interface NavGroup {
  id: string
  label: string
  labelAr: string
  items: NavItem[]
  roles: UserRole[]
}

export type Theme = 'light' | 'dark' | 'system'

export type Language = 'en' | 'ar'
