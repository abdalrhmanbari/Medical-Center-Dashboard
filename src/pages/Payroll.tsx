import { Download, TrendingUp, Wallet, Users, DollarSign } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PayrollTable } from '@/features/payroll/PayrollTable'

const summaryStats = [
  { label: 'Total Payroll',   value: 'SAR 105,425', icon: Wallet,      color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { label: 'Total Employees', value: '24',          icon: Users,       color: 'text-blue-500',   bg: 'bg-blue-500/10' },
  { label: 'Avg. Salary',     value: 'SAR 18,200',  icon: DollarSign,  color: 'text-emerald-500',bg: 'bg-emerald-500/10' },
  { label: 'Total Bonuses',   value: 'SAR 9,000',   icon: TrendingUp,  color: 'text-amber-500',  bg: 'bg-amber-500/10' },
]

export default function Payroll() {
  return (
    <PageContainer
      title="Payroll"
      description="Manage employee compensation and payroll processing."
      actions={
        <Button size="sm" variant="outline" className="gap-1.5">
          <Download className="h-4 w-4" />
          Export
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryStats.map(stat => (
          <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className={cn('mb-3 flex h-10 w-10 items-center justify-center rounded-xl', stat.bg)}>
              <stat.icon className={cn('h-5 w-5', stat.color)} />
            </div>
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <PayrollTable />
    </PageContainer>
  )
}
