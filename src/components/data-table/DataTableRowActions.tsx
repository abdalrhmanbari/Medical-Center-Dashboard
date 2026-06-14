import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { TableAction } from '@/types/table'

interface DataTableRowActionsProps<TData> {
  row: TData
  actions: TableAction<TData>[]
  label?: string
}

export function DataTableRowActions<TData>({
  row,
  actions,
  label = 'Actions',
}: DataTableRowActionsProps<TData>) {
  if (!actions.length) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground data-[state=open]:bg-accent"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-[11px] font-semibold">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {actions.map((action, i) => (
          <div key={i}>
            {action.separator && i > 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onClick={() => action.onClick(row)}
              disabled={action.disabled?.(row)}
              className={cn(
                'gap-2 text-sm',
                action.destructive && 'text-destructive focus:text-destructive focus:bg-destructive/10'
              )}
            >
              {action.icon && <span className="shrink-0">{action.icon}</span>}
              {action.label}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
