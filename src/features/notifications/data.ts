export type NotificationType = 'appointment' | 'alert' | 'user' | 'info' | 'system'

export interface NotificationRow {
  id: string
  type: NotificationType
  title: string
  message: string
  time: string
  timestamp: string
  status: 'unread' | 'read'
  priority: 'high' | 'medium' | 'low'
}

export const notificationsData: NotificationRow[] = [
  { id: '1',  type: 'appointment', title: 'New appointment scheduled',     message: 'Mohammed Al-Farsi has booked an appointment for May 30 at 10:00 AM.',        time: '5 min ago',   timestamp: '2026-05-29T09:25:00', status: 'unread', priority: 'medium' },
  { id: '2',  type: 'alert',       title: 'Lab results ready',             message: 'Lab results for patient Aisha Al-Rashid (Test #4521) are now available.',     time: '18 min ago',  timestamp: '2026-05-29T09:12:00', status: 'unread', priority: 'high' },
  { id: '3',  type: 'user',        title: 'New user registered',           message: 'Dr. Mariam Al-Ali has been added to the system as Dental Staff.',             time: '1 hour ago',  timestamp: '2026-05-29T08:30:00', status: 'unread', priority: 'low' },
  { id: '4',  type: 'info',        title: 'System maintenance scheduled',  message: 'Scheduled system maintenance on May 31 from 2:00–4:00 AM. Expect downtime.',  time: '3 hours ago', timestamp: '2026-05-29T06:30:00', status: 'read',   priority: 'medium' },
  { id: '5',  type: 'appointment', title: 'Appointment cancelled',         message: 'Yusuf Al-Khalid has cancelled his appointment scheduled for today at 2:30 PM.',time: '5 hours ago', timestamp: '2026-05-29T04:30:00', status: 'read',   priority: 'low' },
  { id: '6',  type: 'info',        title: 'Payroll processed',             message: 'May 2026 payroll has been processed and submitted for approval.',             time: '1 day ago',   timestamp: '2026-05-28T09:00:00', status: 'read',   priority: 'low' },
  { id: '7',  type: 'alert',       title: 'Low medication stock',          message: 'Medication stock for Paracetamol is below the minimum threshold (50 units).',  time: '1 day ago',   timestamp: '2026-05-28T07:45:00', status: 'read',   priority: 'high' },
  { id: '8',  type: 'system',      title: 'Backup completed',              message: 'Automated daily backup completed successfully — 2.4 GB archived.',            time: '1 day ago',   timestamp: '2026-05-28T03:00:00', status: 'read',   priority: 'low' },
  { id: '9',  type: 'user',        title: 'Password reset requested',      message: 'User reception2@medcenter.com has requested a password reset.',               time: '2 days ago',  timestamp: '2026-05-27T14:22:00', status: 'read',   priority: 'medium' },
  { id: '10', type: 'appointment', title: 'Appointment reminder',          message: 'Dr. Omar Farhan has 3 appointments scheduled for tomorrow morning.',          time: '2 days ago',  timestamp: '2026-05-27T08:00:00', status: 'read',   priority: 'medium' },
  { id: '11', type: 'alert',       title: 'Failed login attempt',          message: '3 consecutive failed login attempts detected for unknown IP 10.0.0.45.',      time: '3 days ago',  timestamp: '2026-05-26T22:15:00', status: 'read',   priority: 'high' },
  { id: '12', type: 'info',        title: 'New report available',          message: 'Monthly performance report for April 2026 is now available for download.',   time: '3 days ago',  timestamp: '2026-05-26T09:00:00', status: 'read',   priority: 'low' },
  { id: '13', type: 'system',      title: 'System update applied',         message: 'System version 2.4.1 has been successfully deployed with security patches.',  time: '4 days ago',  timestamp: '2026-05-25T02:00:00', status: 'read',   priority: 'medium' },
  { id: '14', type: 'user',        title: 'Role permissions updated',      message: 'Admin has updated permissions for the Lab Staff role group.',                 time: '5 days ago',  timestamp: '2026-05-24T11:30:00', status: 'read',   priority: 'low' },
  { id: '15', type: 'appointment', title: 'Appointment no-show',           message: 'Patient Faris Al-Otaibi did not attend their scheduled appointment.',         time: '5 days ago',  timestamp: '2026-05-24T10:00:00', status: 'read',   priority: 'medium' },
]
