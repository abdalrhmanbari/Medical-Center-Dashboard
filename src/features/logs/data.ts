export type LogLevel = 'info' | 'success' | 'warning' | 'error'

export interface LogRow {
  id: string
  level: LogLevel
  action: string
  user: string
  ip: string
  timestamp: string
  details: string
  module: string
}

export const logsData: LogRow[] = [
  { id: 'LOG-8821', level: 'info',    action: 'User Login',              user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-29 09:02:14', details: 'Successful login from browser Chrome 124', module: 'Auth' },
  { id: 'LOG-8820', level: 'success', action: 'Appointment Created',     user: 'reception@medcenter.com',  ip: '192.168.1.22',  timestamp: '2026-05-29 08:55:41', details: 'APT-006 created for Nour Al-Salam', module: 'Appointments' },
  { id: 'LOG-8819', level: 'warning', action: 'Failed Login Attempt',    user: 'unknown',                  ip: '10.0.0.45',     timestamp: '2026-05-29 08:42:07', details: '3 failed attempts — account locked temporarily', module: 'Auth' },
  { id: 'LOG-8818', level: 'info',    action: 'Role Changed',            user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-29 08:31:22', details: 'User lab@medcenter.com role updated to Lab Staff', module: 'Users' },
  { id: 'LOG-8817', level: 'error',   action: 'Report Export Failed',    user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-29 08:20:55', details: 'PDF generation timeout — retry needed', module: 'Reports' },
  { id: 'LOG-8816', level: 'success', action: 'Payroll Processed',       user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-29 07:58:03', details: 'May 2026 payroll submitted for approval', module: 'Payroll' },
  { id: 'LOG-8815', level: 'info',    action: 'System Backup',           user: 'system',                   ip: 'localhost',     timestamp: '2026-05-29 03:00:00', details: 'Automated daily backup completed — 2.4 GB', module: 'System' },
  { id: 'LOG-8814', level: 'success', action: 'User Created',            user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-28 16:44:12', details: 'New user Dr. Mariam Al-Ali added to system', module: 'Users' },
  { id: 'LOG-8813', level: 'info',    action: 'Doctor Profile Updated',  user: 'k.hassan@medcenter.com',   ip: '192.168.1.14',  timestamp: '2026-05-28 15:30:09', details: 'Dr. Khalid Hassan updated contact information', module: 'Doctors' },
  { id: 'LOG-8812', level: 'warning', action: 'Low Stock Alert',         user: 'system',                   ip: 'localhost',     timestamp: '2026-05-28 12:00:00', details: 'Paracetamol stock below threshold (50 units)', module: 'Inventory' },
  { id: 'LOG-8811', level: 'success', action: 'Lab Result Published',    user: 'lab@medcenter.com',        ip: '192.168.1.33',  timestamp: '2026-05-28 11:22:47', details: 'Test #4521 results published for patient Aisha Al-Rashid', module: 'Lab' },
  { id: 'LOG-8810', level: 'error',   action: 'Database Connection Lost',user: 'system',                   ip: 'localhost',     timestamp: '2026-05-28 09:11:03', details: 'DB connection lost for 45s — auto-recovered', module: 'System' },
  { id: 'LOG-8809', level: 'info',    action: 'Appointment Cancelled',   user: 'reception@medcenter.com',  ip: '192.168.1.22',  timestamp: '2026-05-28 08:45:00', details: 'APT-005 cancelled by patient Yusuf Al-Khalid', module: 'Appointments' },
  { id: 'LOG-8808', level: 'success', action: 'Invoice Generated',       user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-27 17:05:22', details: 'Invoice #INV-2026-048 generated for SAR 1,200', module: 'Billing' },
  { id: 'LOG-8807', level: 'warning', action: 'Session Timeout',         user: 'dental@medcenter.com',     ip: '192.168.1.45',  timestamp: '2026-05-27 16:00:00', details: 'Session expired after 30 min of inactivity', module: 'Auth' },
  { id: 'LOG-8806', level: 'info',    action: 'User Logout',             user: 'reception2@medcenter.com', ip: '192.168.1.25',  timestamp: '2026-05-27 14:30:00', details: 'Normal logout', module: 'Auth' },
  { id: 'LOG-8805', level: 'success', action: 'Schedule Updated',        user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-27 13:15:45', details: 'Dr. Sara Ibrahim schedule updated for June', module: 'Doctors' },
  { id: 'LOG-8804', level: 'error',   action: 'Email Notification Failed',user: 'system',                  ip: 'localhost',     timestamp: '2026-05-27 11:00:00', details: 'SMTP connection timeout — notification queue retrying', module: 'Notifications' },
  { id: 'LOG-8803', level: 'info',    action: 'Report Generated',        user: 'admin@medcenter.com',      ip: '192.168.1.10',  timestamp: '2026-05-27 09:00:00', details: 'Monthly analytics report for April 2026 generated', module: 'Reports' },
  { id: 'LOG-8802', level: 'success', action: 'System Update Applied',   user: 'system',                   ip: 'localhost',     timestamp: '2026-05-26 02:00:00', details: 'System version 2.4.1 deployed successfully', module: 'System' },
]
