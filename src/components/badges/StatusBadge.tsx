import { Badge } from '@/components/ui/badge'
import type { StatusVariant } from '@/types/table'

const statusLabels: Record<StatusVariant, string> = {
  active:      'Active',
  inactive:    'Inactive',
  pending:     'Pending',
  paid:        'Paid',
  cancelled:   'Cancelled',
  warning:     'Warning',
  success:     'Success',
  info:        'Info',
  error:       'Error',
  available:   'Available',
  busy:        'Busy',
  off:         'Off Duty',
  confirmed:   'Confirmed',
  waiting:     'Waiting',
  in_progress: 'In Progress',
  unread:      'Unread',
  read:        'Read',
  processing:  'Processing',
}

const statusDots: Record<StatusVariant, string> = {
  active:      'bg-emerald-500',
  inactive:    'bg-muted-foreground',
  pending:     'bg-amber-500',
  paid:        'bg-emerald-500',
  cancelled:   'bg-red-500',
  warning:     'bg-orange-500',
  success:     'bg-emerald-500',
  info:        'bg-blue-500',
  error:       'bg-red-500',
  available:   'bg-emerald-500',
  busy:        'bg-amber-500',
  off:         'bg-muted-foreground',
  confirmed:   'bg-emerald-500',
  waiting:     'bg-amber-500',
  in_progress: 'bg-blue-500',
  unread:      'bg-primary',
  read:        'bg-muted-foreground',
  processing:  'bg-violet-500',
}

interface StatusBadgeProps {
  status: StatusVariant
  showDot?: boolean
  label?: string
  className?: string
}

export function StatusBadge({ status, showDot = true, label, className }: StatusBadgeProps) {
  return (
    <Badge variant={status} className={className}>
      {showDot && (
        <span className={`h-1.5 w-1.5 rounded-full ${statusDots[status]}`} />
      )}
      {label ?? statusLabels[status]}
    </Badge>
  )
}
