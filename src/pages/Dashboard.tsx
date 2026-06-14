import { Users, CalendarCheck, ArrowUpRight, Clock, Stethoscope, FlaskConical, Trophy } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Total Patients', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: "Today's Appointments", value: '48', change: '+5%', icon: CalendarCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Active Doctors', value: '24', change: '+2', icon: Stethoscope, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { label: 'Lab Tests Today', value: '136', change: '+18%', icon: FlaskConical, color: 'text-amber-500', bg: 'bg-amber-500/10' },
]

const recentAppointments = [
  { patient: 'Mohammed Al-Farsi', doctor: 'Dr. Khalid Hassan', time: '09:00 AM', status: 'confirmed', type: 'General' },
  { patient: 'Aisha Al-Rashid', doctor: 'Dr. Layla Noor', time: '10:30 AM', status: 'waiting', type: 'Dental' },
  { patient: 'Omar Abdullah', doctor: 'Dr. Ahmed Saleh', time: '11:00 AM', status: 'confirmed', type: 'Lab' },
  { patient: 'Fatima Hassan', doctor: 'Dr. Sara Ibrahim', time: '02:00 PM', status: 'cancelled', type: 'General' },
  { patient: 'Yusuf Al-Khalid', doctor: 'Dr. Khalid Hassan', time: '03:30 PM', status: 'confirmed', type: 'Cardiology' },
]

const topInternalMedicineClinic = {
  specialty: 'Internal Medicine',
  doctor: 'Dr. Ahmed Saleh',
  patients: 205,
}

const topDoctorPerDept = [
  { department: 'Internal Medicine', doctor: 'Dr. Ahmed Saleh',     patients: 205, color: 'text-blue-500',    bg: 'bg-blue-500/10' },
  { department: 'Radiology',         doctor: 'Dr. Mona Al-Zahrani',  patients: 203, color: 'text-violet-500',  bg: 'bg-violet-500/10' },
  { department: 'Pediatrics',        doctor: 'Dr. Sara Ibrahim',     patients: 167, color: 'text-pink-500',    bg: 'bg-pink-500/10' },
  { department: 'Cardiology',        doctor: 'Dr. Khalid Hassan',    patients: 142, color: 'text-red-500',     bg: 'bg-red-500/10' },
  { department: 'Gynecology',        doctor: 'Dr. Hana Qasim',       patients: 131, color: 'text-rose-500',    bg: 'bg-rose-500/10' },
]

const statusStyles: Record<string, string> = {
  confirmed: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  waiting: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  cancelled: 'bg-red-500/10 text-red-600 dark:text-red-400',
}

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <PageContainer
      title={`Welcome back, ${user?.name ?? 'there'}`}
      description="Here's what's happening at the medical center today."
    >
      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', stat.bg)}>
                <stat.icon className={cn('h-5 w-5', stat.color)} />
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent appointments */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h2 className="font-semibold text-foreground">Recent Appointments</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Today's schedule overview</p>
            </div>
            <button className="text-xs font-medium text-primary hover:underline">View all</button>
          </div>
          <div className="divide-y divide-border">
            {recentAppointments.map((apt, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {apt.patient.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{apt.patient}</p>
                  <p className="text-xs text-muted-foreground truncate">{apt.doctor} · {apt.type}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {apt.time}
                  </div>
                  <span className={cn('rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize', statusStyles[apt.status])}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Activity */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-semibold text-foreground">Center Activity</h2>
          <p className="text-xs text-muted-foreground mt-0.5 mb-5">Real-time overview</p>

          {/* Top Internal Medicine Clinic */}
          <div className="mb-5 rounded-xl bg-blue-500/10 px-4 py-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Trophy className="h-3.5 w-3.5 text-blue-500" />
              <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Top Internal Medicine Clinic
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground">{topInternalMedicineClinic.specialty}</p>
            <p className="text-xs text-muted-foreground">{topInternalMedicineClinic.doctor}</p>
            <p className="mt-1 text-lg font-bold text-blue-600 dark:text-blue-400">
              {topInternalMedicineClinic.patients}
              <span className="ml-1 text-xs font-normal text-muted-foreground">patients</span>
            </p>
          </div>

          {/* Top Doctor per Department */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Top Doctor per Department
          </p>
          <div className="space-y-3">
            {topDoctorPerDept.map(item => (
              <div key={item.department} className="flex items-center gap-3">
                <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-lg', item.bg)}>
                  <Stethoscope className={cn('h-4 w-4', item.color)} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.doctor}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.department}</p>
                </div>
                <span className={cn('text-sm font-bold shrink-0', item.color)}>{item.patients}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
