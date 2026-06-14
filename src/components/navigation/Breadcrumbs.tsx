import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const routeLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  users: 'Users',
  doctors: 'Doctors',
  payroll: 'Payroll',
  appointments: 'Appointments',
  notifications: 'Notifications',
  analytics: 'Analytics',
  settings: 'Settings',
  logs: 'System Logs',
}

export function Breadcrumbs() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link
        to="/dashboard"
        className="flex items-center gap-1 rounded-md px-1.5 py-0.5 transition-colors hover:bg-accent hover:text-foreground"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {segments.map((segment, i) => {
        const path = '/' + segments.slice(0, i + 1).join('/')
        const isLast = i === segments.length - 1
        const label = routeLabels[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1)

        return (
          <div key={path} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {isLast ? (
              <span className={cn('rounded-md px-1.5 py-0.5 font-medium text-foreground')}>
                {label}
              </span>
            ) : (
              <Link
                to={path}
                className="rounded-md px-1.5 py-0.5 transition-colors hover:bg-accent hover:text-foreground"
              >
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
