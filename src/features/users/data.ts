import type { UserRole } from '@/types'

export interface UserRow {
  id: string
  name: string
  email: string
  role: UserRole
  department: string
  status: 'active' | 'inactive'
  joined: string
  lastActive: string
}

export const usersData: UserRow[] = [
  { id: '1',  name: 'Dr. Ahmed Al-Rashid',   email: 'admin@medcenter.com',       role: 'super_admin',  department: 'Administration',   status: 'active',   joined: '2023-01-15', lastActive: '2026-05-29' },
  { id: '2',  name: 'Sara Al-Khalid',         email: 'reception@medcenter.com',   role: 'receptionist', department: 'Front Desk',        status: 'active',   joined: '2023-03-22', lastActive: '2026-05-29' },
  { id: '3',  name: 'Dr. Omar Hassan',        email: 'o.hassan@medcenter.com',    role: 'doctor',       department: 'Internal Medicine', status: 'active',   joined: '2022-08-10', lastActive: '2026-05-28' },
  { id: '4',  name: 'Layla Ibrahim',          email: 'lab@medcenter.com',         role: 'lab_staff',    department: 'Laboratory',        status: 'inactive', joined: '2023-06-01', lastActive: '2026-04-15' },
  { id: '5',  name: 'Dr. Fatima Noor',        email: 'dental@medcenter.com',      role: 'dental_staff', department: 'Dental',            status: 'active',   joined: '2023-02-14', lastActive: '2026-05-29' },
  { id: '6',  name: 'Khalid Al-Sayed',        email: 'reception2@medcenter.com',  role: 'receptionist', department: 'Front Desk',        status: 'active',   joined: '2024-01-10', lastActive: '2026-05-27' },
  { id: '7',  name: 'Dr. Mariam Al-Ali',      email: 'm.alali@medcenter.com',     role: 'doctor',       department: 'Neurology',         status: 'active',   joined: '2024-03-05', lastActive: '2026-05-29' },
  { id: '8',  name: 'Hassan Al-Mutairi',      email: 'h.mutairi@medcenter.com',   role: 'lab_staff',    department: 'Laboratory',        status: 'active',   joined: '2023-09-18', lastActive: '2026-05-28' },
  { id: '9',  name: 'Nour Al-Salam',          email: 'n.salam@medcenter.com',     role: 'receptionist', department: 'Emergency',         status: 'active',   joined: '2024-07-22', lastActive: '2026-05-29' },
  { id: '10', name: 'Dr. Yusuf Al-Zahrawi',   email: 'y.zahrawi@medcenter.com',   role: 'doctor',       department: 'Cardiology',        status: 'active',   joined: '2022-11-30', lastActive: '2026-05-26' },
  { id: '11', name: 'Aisha Al-Rashid',        email: 'a.rashid@medcenter.com',    role: 'dental_staff', department: 'Dental',            status: 'inactive', joined: '2023-12-01', lastActive: '2026-03-20' },
  { id: '12', name: 'Dr. Khalid Hassan',      email: 'k.hassan@medcenter.com',    role: 'doctor',       department: 'Cardiology',        status: 'active',   joined: '2021-05-14', lastActive: '2026-05-29' },
  { id: '13', name: 'Mona Al-Farsi',          email: 'm.farsi@medcenter.com',     role: 'lab_staff',    department: 'Pathology',         status: 'active',   joined: '2024-02-28', lastActive: '2026-05-28' },
  { id: '14', name: 'Dr. Sara Ibrahim',       email: 's.ibrahim@medcenter.com',   role: 'doctor',       department: 'Pediatrics',        status: 'active',   joined: '2022-06-19', lastActive: '2026-05-29' },
  { id: '15', name: 'Tariq Al-Ghamdi',        email: 't.ghamdi@medcenter.com',    role: 'receptionist', department: 'Front Desk',        status: 'active',   joined: '2025-01-08', lastActive: '2026-05-29' },
  { id: '16', name: 'Dr. Layla Noor',         email: 'l.noor@medcenter.com',      role: 'dental_staff', department: 'Dental',            status: 'active',   joined: '2023-08-25', lastActive: '2026-05-28' },
  { id: '17', name: 'Faris Al-Otaibi',        email: 'f.otaibi@medcenter.com',    role: 'lab_staff',    department: 'Laboratory',        status: 'inactive', joined: '2024-04-11', lastActive: '2026-01-30' },
  { id: '18', name: 'Dr. Omar Farhan',        email: 'o.farhan@medcenter.com',    role: 'doctor',       department: 'Orthopedics',       status: 'active',   joined: '2023-07-17', lastActive: '2026-05-27' },
]
