import { ArrowDown, ArrowUp, ArrowUpDown, EyeOff } from 'lucide-react'
import type { Column } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort() && !column.getCanHide()) {
    return <span className={cn('text-xs font-semibold uppercase tracking-wider text-muted-foreground', className)}>{title}</span>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground',
            'hover:text-foreground transition-colors duration-150 focus-visible:outline-none',
            className
          )}
        >
          {title}
          {column.getCanSort() && (
            <span className="ml-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
              {column.getIsSorted() === 'asc' ? (
                <ArrowUp className="h-3.5 w-3.5 text-primary" />
              ) : column.getIsSorted() === 'desc' ? (
                <ArrowDown className="h-3.5 w-3.5 text-primary" />
              ) : (
                <ArrowUpDown className="h-3.5 w-3.5" />
              )}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-36">
        {column.getCanSort() && (
          <>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)} className="gap-2">
              <ArrowUp className="h-3.5 w-3.5 text-muted-foreground" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)} className="gap-2">
              <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
              Desc
            </DropdownMenuItem>
            {column.getIsSorted() && (
              <DropdownMenuItem onClick={() => column.clearSorting()} className="gap-2">
                <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
                Reset
              </DropdownMenuItem>
            )}
          </>
        )}
        {column.getCanSort() && column.getCanHide() && <DropdownMenuSeparator />}
        {column.getCanHide() && (
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)} className="gap-2">
            <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />
            Hide
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
