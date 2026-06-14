export interface PayrollRow {
  id: string
  name: string
  role: string
  department: string
  base: number
  bonus: number
  deductions: number
  net: number
  status: 'paid' | 'pending' | 'processing'
  period: string
}

export const payrollData: PayrollRow[] = [
  { id: '1',  name: 'Dr. Khalid Hassan',    role: 'Doctor',       department: 'Cardiology',        base: 28000, bonus: 3500, deductions: 1400, net: 30100, status: 'pending',    period: 'May 2026' },
  { id: '2',  name: 'Dr. Layla Noor',       role: 'Doctor',       department: 'Dental',            base: 25000, bonus: 2000, deductions: 1250, net: 25750, status: 'pending',    period: 'May 2026' },
  { id: '3',  name: 'Sara Al-Khalid',       role: 'Receptionist', department: 'Front Desk',        base: 8500,  bonus: 500,  deductions: 425,  net: 8575,  status: 'pending',    period: 'May 2026' },
  { id: '4',  name: 'Layla Ibrahim',        role: 'Lab Staff',    department: 'Laboratory',        base: 10000, bonus: 800,  deductions: 500,  net: 10300, status: 'pending',    period: 'May 2026' },
  { id: '5',  name: 'Dr. Fatima Noor',      role: 'Dental Staff', department: 'Dental',            base: 22000, bonus: 1800, deductions: 1100, net: 22700, status: 'pending',    period: 'May 2026' },
  { id: '6',  name: 'Khalid Al-Sayed',      role: 'Receptionist', department: 'Front Desk',        base: 8000,  bonus: 400,  deductions: 400,  net: 8000,  status: 'processing', period: 'May 2026' },
  { id: '7',  name: 'Dr. Ahmed Saleh',      role: 'Doctor',       department: 'Internal Medicine', base: 30000, bonus: 4000, deductions: 1500, net: 32500, status: 'paid',       period: 'Apr 2026' },
  { id: '8',  name: 'Dr. Sara Ibrahim',     role: 'Doctor',       department: 'Pediatrics',        base: 26000, bonus: 2500, deductions: 1300, net: 27200, status: 'paid',       period: 'Apr 2026' },
  { id: '9',  name: 'Hassan Al-Mutairi',    role: 'Lab Staff',    department: 'Laboratory',        base: 9500,  bonus: 700,  deductions: 475,  net: 9725,  status: 'paid',       period: 'Apr 2026' },
  { id: '10', name: 'Dr. Mariam Al-Ali',    role: 'Doctor',       department: 'Neurology',         base: 27000, bonus: 3000, deductions: 1350, net: 28650, status: 'paid',       period: 'Apr 2026' },
  { id: '11', name: 'Nour Al-Salam',        role: 'Receptionist', department: 'Emergency',         base: 9000,  bonus: 600,  deductions: 450,  net: 9150,  status: 'paid',       period: 'Apr 2026' },
  { id: '12', name: 'Dr. Omar Farhan',      role: 'Doctor',       department: 'Orthopedics',       base: 24000, bonus: 2200, deductions: 1200, net: 25000, status: 'paid',       period: 'Apr 2026' },
  { id: '13', name: 'Mona Al-Farsi',        role: 'Lab Staff',    department: 'Pathology',         base: 10500, bonus: 900,  deductions: 525,  net: 10875, status: 'paid',       period: 'Apr 2026' },
  { id: '14', name: 'Tariq Al-Ghamdi',      role: 'Receptionist', department: 'Front Desk',        base: 7500,  bonus: 300,  deductions: 375,  net: 7425,  status: 'processing', period: 'May 2026' },
  { id: '15', name: 'Dr. Hana Qasim',       role: 'Doctor',       department: 'Gynecology',        base: 29000, bonus: 3200, deductions: 1450, net: 30750, status: 'paid',       period: 'Apr 2026' },
  { id: '16', name: 'Faris Al-Otaibi',      role: 'Lab Staff',    department: 'Laboratory',        base: 9800,  bonus: 650,  deductions: 490,  net: 9960,  status: 'paid',       period: 'Apr 2026' },
]
