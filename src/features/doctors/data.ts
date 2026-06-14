export interface DoctorRow {
  id: string
  name: string
  specialty: string
  patients: number
  rating: number
  phone: string
  email: string
  status: 'available' | 'busy' | 'off'
  schedule: string
  experience: number
  department: string
}

export const doctorsData: DoctorRow[] = [
  { id: '1',  name: 'Dr. Khalid Hassan',     specialty: 'Cardiology',       patients: 142, rating: 4.9, phone: '+966 50 123 4567', email: 'k.hassan@medcenter.com',   status: 'available', schedule: 'Sun–Thu', experience: 14, department: 'Cardiology' },
  { id: '2',  name: 'Dr. Layla Noor',        specialty: 'Dental',           patients: 98,  rating: 4.8, phone: '+966 50 234 5678', email: 'l.noor@medcenter.com',     status: 'busy',      schedule: 'Mon–Fri', experience: 9,  department: 'Dental' },
  { id: '3',  name: 'Dr. Ahmed Saleh',       specialty: 'Internal Medicine', patients: 205, rating: 4.7, phone: '+966 50 345 6789', email: 'a.saleh@medcenter.com',    status: 'available', schedule: 'Sun–Thu', experience: 18, department: 'Internal Medicine' },
  { id: '4',  name: 'Dr. Sara Ibrahim',      specialty: 'Pediatrics',       patients: 167, rating: 4.9, phone: '+966 50 456 7890', email: 's.ibrahim@medcenter.com',  status: 'off',       schedule: 'Mon–Sat', experience: 11, department: 'Pediatrics' },
  { id: '5',  name: 'Dr. Omar Farhan',       specialty: 'Orthopedics',      patients: 89,  rating: 4.6, phone: '+966 50 567 8901', email: 'o.farhan@medcenter.com',   status: 'available', schedule: 'Sun–Thu', experience: 7,  department: 'Orthopedics' },
  { id: '6',  name: 'Dr. Mariam Al-Ali',     specialty: 'Neurology',        patients: 74,  rating: 4.8, phone: '+966 50 678 9012', email: 'm.alali@medcenter.com',    status: 'busy',      schedule: 'Mon–Fri', experience: 12, department: 'Neurology' },
  { id: '7',  name: 'Dr. Faisal Al-Otaibi',  specialty: 'Dermatology',      patients: 118, rating: 4.5, phone: '+966 50 789 0123', email: 'f.otaibi@medcenter.com',   status: 'available', schedule: 'Sun–Thu', experience: 8,  department: 'Dermatology' },
  { id: '8',  name: 'Dr. Hana Qasim',        specialty: 'Gynecology',       patients: 131, rating: 4.9, phone: '+966 50 890 1234', email: 'h.qasim@medcenter.com',    status: 'available', schedule: 'Mon–Fri', experience: 16, department: 'Gynecology' },
  { id: '9',  name: 'Dr. Tariq Mansour',     specialty: 'Ophthalmology',    patients: 95,  rating: 4.7, phone: '+966 50 901 2345', email: 't.mansour@medcenter.com',  status: 'off',       schedule: 'Sun–Wed', experience: 10, department: 'Ophthalmology' },
  { id: '10', name: 'Dr. Nadia Al-Harbi',    specialty: 'Endocrinology',    patients: 63,  rating: 4.8, phone: '+966 50 012 3456', email: 'n.alharbi@medcenter.com',  status: 'available', schedule: 'Mon–Thu', experience: 13, department: 'Internal Medicine' },
  { id: '11', name: 'Dr. Sami Al-Rashidi',   specialty: 'Cardiology',       patients: 87,  rating: 4.6, phone: '+966 50 111 2233', email: 's.rashidi@medcenter.com',  status: 'busy',      schedule: 'Sun–Thu', experience: 6,  department: 'Cardiology' },
  { id: '12', name: 'Dr. Reem Al-Dossari',   specialty: 'Dental',           patients: 112, rating: 4.7, phone: '+966 50 222 3344', email: 'r.dossari@medcenter.com',  status: 'available', schedule: 'Mon–Sat', experience: 9,  department: 'Dental' },
  { id: '13', name: 'Dr. Basel Hamdan',       specialty: 'Psychiatry',       patients: 56,  rating: 4.9, phone: '+966 50 333 4455', email: 'b.hamdan@medcenter.com',   status: 'available', schedule: 'Sun–Thu', experience: 15, department: 'Psychiatry' },
  { id: '14', name: 'Dr. Mona Al-Zahrani',   specialty: 'Radiology',        patients: 203, rating: 4.8, phone: '+966 50 444 5566', email: 'm.zahrani@medcenter.com',  status: 'busy',      schedule: 'Mon–Fri', experience: 20, department: 'Radiology' },
  { id: '15', name: 'Dr. Yazeed Al-Shehri',  specialty: 'Urology',          patients: 78,  rating: 4.5, phone: '+966 50 555 6677', email: 'y.shehri@medcenter.com',   status: 'off',       schedule: 'Sun–Wed', experience: 5,  department: 'Urology' },
]
