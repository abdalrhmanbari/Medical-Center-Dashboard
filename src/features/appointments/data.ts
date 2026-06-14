export interface AppointmentRow {
  id: string
  patient: string
  doctor: string
  date: string
  time: string
  type: string
  status: 'confirmed' | 'waiting' | 'in_progress' | 'cancelled'
  room: string
  duration: number
}

export const appointmentsData: AppointmentRow[] = [
  { id: 'APT-001', patient: 'Mohammed Al-Farsi',   doctor: 'Dr. Khalid Hassan',   date: '2026-05-29', time: '09:00', type: 'Consultation',    status: 'confirmed',   room: 'Room 201',  duration: 30 },
  { id: 'APT-002', patient: 'Aisha Al-Rashid',     doctor: 'Dr. Layla Noor',      date: '2026-05-29', time: '10:30', type: 'Dental Checkup',  status: 'waiting',     room: 'Dental 1',  duration: 45 },
  { id: 'APT-003', patient: 'Omar Abdullah',       doctor: 'Dr. Ahmed Saleh',     date: '2026-05-29', time: '11:00', type: 'Lab Test',        status: 'in_progress', room: 'Lab A',     duration: 60 },
  { id: 'APT-004', patient: 'Fatima Hassan',       doctor: 'Dr. Sara Ibrahim',    date: '2026-05-29', time: '13:00', type: 'Pediatrics',      status: 'confirmed',   room: 'Room 105',  duration: 30 },
  { id: 'APT-005', patient: 'Yusuf Al-Khalid',    doctor: 'Dr. Khalid Hassan',   date: '2026-05-29', time: '14:30', type: 'Follow-up',       status: 'cancelled',   room: 'Room 201',  duration: 20 },
  { id: 'APT-006', patient: 'Nour Al-Salam',       doctor: 'Dr. Omar Farhan',     date: '2026-05-30', time: '09:00', type: 'Orthopedics',     status: 'confirmed',   room: 'Room 310',  duration: 45 },
  { id: 'APT-007', patient: 'Sami Al-Dossari',     doctor: 'Dr. Mariam Al-Ali',   date: '2026-05-30', time: '10:00', type: 'Neurology',       status: 'confirmed',   room: 'Room 402',  duration: 60 },
  { id: 'APT-008', patient: 'Hana Al-Shammari',    doctor: 'Dr. Hana Qasim',      date: '2026-05-30', time: '11:30', type: 'Gynecology',      status: 'waiting',     room: 'Room 215',  duration: 30 },
  { id: 'APT-009', patient: 'Basel Mahmoud',       doctor: 'Dr. Faisal Al-Otaibi',date: '2026-05-30', time: '13:00', type: 'Dermatology',     status: 'confirmed',   room: 'Room 118',  duration: 20 },
  { id: 'APT-010', patient: 'Reem Al-Ghamdi',      doctor: 'Dr. Ahmed Saleh',     date: '2026-05-30', time: '14:00', type: 'Consultation',    status: 'confirmed',   room: 'Room 201',  duration: 30 },
  { id: 'APT-011', patient: 'Tariq Al-Mutairi',    doctor: 'Dr. Tariq Mansour',   date: '2026-05-31', time: '09:30', type: 'Ophthalmology',   status: 'confirmed',   room: 'Eye Clinic',duration: 45 },
  { id: 'APT-012', patient: 'Mona Al-Zahrani',     doctor: 'Dr. Nadia Al-Harbi',  date: '2026-05-31', time: '11:00', type: 'Endocrinology',   status: 'waiting',     room: 'Room 320',  duration: 30 },
  { id: 'APT-013', patient: 'Faisal Al-Ahmadi',    doctor: 'Dr. Sami Al-Rashidi', date: '2026-05-31', time: '12:30', type: 'Cardiology',      status: 'cancelled',   room: 'Room 201',  duration: 45 },
  { id: 'APT-014', patient: 'Dalal Al-Harbi',      doctor: 'Dr. Khalid Hassan',   date: '2026-06-01', time: '09:00', type: 'Follow-up',       status: 'confirmed',   room: 'Room 201',  duration: 20 },
  { id: 'APT-015', patient: 'Ibrahim Al-Rashidi',  doctor: 'Dr. Layla Noor',      date: '2026-06-01', time: '10:00', type: 'Dental Checkup',  status: 'confirmed',   room: 'Dental 2',  duration: 60 },
  { id: 'APT-016', patient: 'Khalid Al-Dossari',   doctor: 'Dr. Basel Hamdan',    date: '2026-06-01', time: '11:30', type: 'Psychiatry',      status: 'confirmed',   room: 'Room 507',  duration: 45 },
  { id: 'APT-017', patient: 'Salma Al-Mutairi',    doctor: 'Dr. Sara Ibrahim',    date: '2026-06-02', time: '09:00', type: 'Pediatrics',      status: 'confirmed',   room: 'Room 105',  duration: 30 },
  { id: 'APT-018', patient: 'Yazeed Al-Shehri',    doctor: 'Dr. Yazeed Al-Shehri',date: '2026-06-02', time: '10:30', type: 'Urology',         status: 'cancelled',   room: 'Room 412',  duration: 30 },
  { id: 'APT-019', patient: 'Noura Al-Qahtani',    doctor: 'Dr. Mona Al-Zahrani', date: '2026-06-02', time: '13:00', type: 'Radiology',       status: 'confirmed',   room: 'Radiology', duration: 60 },
  { id: 'APT-020', patient: 'Abdullah Al-Ghamdi',  doctor: 'Dr. Omar Farhan',     date: '2026-06-03', time: '09:00', type: 'Orthopedics',     status: 'waiting',     room: 'Room 310',  duration: 45 },
]
