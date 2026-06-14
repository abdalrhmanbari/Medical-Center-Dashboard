import type { NavGroup, UserRole } from '@/types'

export const navigationGroups: NavGroup[] = [
  {
    id: 'overview',
    label: 'Overview',
    labelAr: 'نظرة عامة',
    roles: ['super_admin', 'receptionist', 'doctor', 'lab_staff', 'dental_staff'],
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        labelAr: 'لوحة التحكم',
        icon: 'LayoutDashboard',
        path: '/dashboard',
      },
      {
        id: 'analytics',
        label: 'Analytics',
        labelAr: 'التحليلات',
        icon: 'BarChart3',
        path: '/analytics',
      },
    ],
  },
  {
    id: 'patient_management',
    label: 'Patient Management',
    labelAr: 'إدارة المرضى',
    roles: ['super_admin', 'receptionist', 'doctor'],
    items: [
      {
        id: 'appointments',
        label: 'Appointments',
        labelAr: 'المواعيد',
        icon: 'CalendarCheck',
        path: '/appointments',
        badge: 5,
      },
    ],
  },
  {
    id: 'staff_management',
    label: 'Staff Management',
    labelAr: 'إدارة الموظفين',
    roles: ['super_admin'],
    items: [
      {
        id: 'users',
        label: 'Users',
        labelAr: 'المستخدمون',
        icon: 'Users',
        path: '/users',
      },
      {
        id: 'doctors',
        label: 'Doctors',
        labelAr: 'الأطباء',
        icon: 'Stethoscope',
        path: '/doctors',
      },
      {
        id: 'payroll',
        label: 'Payroll',
        labelAr: 'الرواتب',
        icon: 'Wallet',
        path: '/payroll',
      },
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical',
    labelAr: 'السريري',
    roles: ['doctor'],
    items: [
      {
        id: 'appointments_doctor',
        label: 'My Appointments',
        labelAr: 'مواعيدي',
        icon: 'CalendarCheck',
        path: '/appointments',
        badge: 3,
      },
    ],
  },
  {
    id: 'laboratory',
    label: 'Laboratory',
    labelAr: 'المختبر',
    roles: ['lab_staff'],
    items: [
      {
        id: 'appointments_lab',
        label: 'Lab Requests',
        labelAr: 'طلبات المختبر',
        icon: 'FlaskConical',
        path: '/appointments',
        badge: 8,
      },
    ],
  },
  {
    id: 'dental',
    label: 'Dental',
    labelAr: 'الأسنان',
    roles: ['dental_staff'],
    items: [
      {
        id: 'appointments_dental',
        label: 'Dental Appointments',
        labelAr: 'مواعيد الأسنان',
        icon: 'CalendarCheck',
        path: '/appointments',
        badge: 2,
      },
    ],
  },
  {
    id: 'system',
    label: 'System',
    labelAr: 'النظام',
    roles: ['super_admin', 'receptionist', 'doctor', 'lab_staff', 'dental_staff'],
    items: [
      {
        id: 'notifications',
        label: 'Notifications',
        labelAr: 'الإشعارات',
        icon: 'Bell',
        path: '/notifications',
        badge: 3,
      },
      {
        id: 'settings',
        label: 'Settings',
        labelAr: 'الإعدادات',
        icon: 'Settings',
        path: '/settings',
      },
    ],
  },
  {
    id: 'admin_tools',
    label: 'Admin Tools',
    labelAr: 'أدوات المشرف',
    roles: ['super_admin'],
    items: [
      {
        id: 'logs',
        label: 'System Logs',
        labelAr: 'سجلات النظام',
        icon: 'ScrollText',
        path: '/logs',
      },
    ],
  },
]

export const getRoleNav = (role: UserRole): NavGroup[] =>
  navigationGroups.filter(group => group.roles.includes(role))

export const roleLabels: Record<UserRole, { en: string; ar: string; color: string }> = {
  super_admin: { en: 'Super Admin', ar: 'المشرف العام', color: 'bg-violet-500' },
  receptionist: { en: 'Receptionist', ar: 'الاستقبال', color: 'bg-blue-500' },
  doctor: { en: 'Doctor', ar: 'طبيب', color: 'bg-emerald-500' },
  lab_staff: { en: 'Lab Staff', ar: 'موظف مختبر', color: 'bg-amber-500' },
  dental_staff: { en: 'Dental Staff', ar: 'طاقم الأسنان', color: 'bg-rose-500' },
}
