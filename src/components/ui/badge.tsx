import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors',
  {
    variants: {
      variant: {
        default:   'bg-primary/10 text-primary',
        secondary: 'bg-secondary text-secondary-foreground',
        outline:   'border border-border text-foreground',
        // Status variants
        active:      'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400',
        inactive:    'bg-muted text-muted-foreground',
        pending:     'bg-amber-500/12 text-amber-700 dark:text-amber-400',
        paid:        'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400',
        cancelled:   'bg-red-500/12 text-red-700 dark:text-red-400',
        warning:     'bg-orange-500/12 text-orange-700 dark:text-orange-400',
        success:     'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400',
        info:        'bg-blue-500/12 text-blue-700 dark:text-blue-400',
        error:       'bg-red-500/12 text-red-700 dark:text-red-400',
        available:   'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400',
        busy:        'bg-amber-500/12 text-amber-700 dark:text-amber-400',
        off:         'bg-muted text-muted-foreground',
        confirmed:   'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400',
        waiting:     'bg-amber-500/12 text-amber-700 dark:text-amber-400',
        in_progress: 'bg-blue-500/12 text-blue-700 dark:text-blue-400',
        unread:      'bg-primary/12 text-primary',
        read:        'bg-muted text-muted-foreground',
        processing:  'bg-violet-500/12 text-violet-700 dark:text-violet-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
