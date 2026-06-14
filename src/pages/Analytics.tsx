import { TrendingUp, TrendingDown, Users, CalendarCheck, Activity, BarChart3 } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { cn } from '@/lib/utils'

const kpis = [
  { label: 'Total Revenue', value: 'SAR 847,200', change: +14.2, period: 'vs last month', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Patient Visits', value: '3,421', change: +8.7, period: 'vs last month', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Appointments', value: '1,847', change: -2.3, period: 'vs last month', icon: CalendarCheck, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { label: 'Avg. Wait Time', value: '18 min', change: -12.4, period: 'vs last month', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-500/10' },
]

const departments = [
  { name: 'Internal Medicine', visits: 842, revenue: 224600, growth: 12 },
  { name: 'Cardiology', visits: 634, revenue: 189400, growth: 18 },
  { name: 'Dental', visits: 521, revenue: 142800, growth: 7 },
  { name: 'Pediatrics', visits: 489, revenue: 98200, growth: 22 },
  { name: 'Laboratory', visits: 412, revenue: 87400, growth: 5 },
  { name: 'Orthopedics', visits: 294, revenue: 104800, growth: -3 },
]

const maxVisits = Math.max(...departments.map(d => d.visits))

export default function Analytics() {
  return (
    <PageContainer
      title="Analytics"
      description="Performance metrics and insights for May 2026."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(kpi => (
          <div key={kpi.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', kpi.bg)}>
                <kpi.icon className={cn('h-5 w-5', kpi.color)} />
              </div>
              <div className={cn(
                'flex items-center gap-1 text-xs font-semibold',
                kpi.change >= 0 ? 'text-emerald-600' : 'text-red-500'
              )}>
                {kpi.change >= 0 ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {Math.abs(kpi.change)}%
              </div>
            </div>
            <p className="mt-4 text-2xl font-bold text-foreground">{kpi.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground/70">{kpi.period}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Department performance */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-foreground">Department Performance</h2>
          </div>
          <div className="space-y-4">
            {departments.map(dept => (
              <div key={dept.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{dept.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">{dept.visits} visits</span>
                    <span className={cn('text-xs font-semibold', dept.growth >= 0 ? 'text-emerald-600' : 'text-red-500')}>
                      {dept.growth >= 0 ? '+' : ''}{dept.growth}%
                    </span>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${(dept.visits / maxVisits) * 100}%`, opacity: 0.7 + (dept.visits / maxVisits) * 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue breakdown */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-foreground">Revenue Breakdown</h2>
          </div>
          <div className="space-y-3">
            {departments.map((dept, i) => {
              const total = departments.reduce((s, d) => s + d.revenue, 0)
              const pct = ((dept.revenue / total) * 100).toFixed(1)
              const colors = ['bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-pink-500', 'bg-amber-500', 'bg-red-500']
              return (
                <div key={dept.name} className="flex items-center gap-3">
                  <div className={cn('h-2.5 w-2.5 rounded-full shrink-0', colors[i])} />
                  <div className="flex-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{dept.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">SAR {dept.revenue.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground w-10 text-right">{pct}%</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-5 border-t border-border pt-4 flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">Total Revenue</span>
            <span className="font-bold text-foreground">SAR {departments.reduce((s, d) => s + d.revenue, 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
