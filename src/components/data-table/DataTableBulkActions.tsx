import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { BulkAction } from '@/types/table'

interface DataTableBulkActionsProps<TData> {
  table: Table<TData>
  bulkActions: BulkAction<TData>[]
}

export function DataTableBulkActions<TData>({ table, bulkActions }: DataTableBulkActionsProps<TData>) {
  const selectedRows = table.getFilteredSelectedRowModel().rows
  const count = selectedRows.length
  const isVisible = count > 0

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -6, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -6, height: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b border-primary/20 bg-primary/[0.04] px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
              {count === 1 ? 'row' : 'rows'} selected
            </span>
            <div className="h-3.5 w-px bg-border" />
            <div className="flex items-center gap-1.5 flex-wrap">
              {bulkActions.map((action, i) => (
                <Button
                  key={i}
                  variant={action.destructive ? 'destructive' : 'outline'}
                  size="sm"
                  className={cn('h-7 gap-1.5 text-xs', !action.destructive && 'hover:border-primary/60')}
                  onClick={() => {
                    action.onClick(selectedRows.map(r => r.original))
                    table.resetRowSelection()
                  }}
                >
                  {action.icon && <span className="shrink-0">{action.icon}</span>}
                  {action.label}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-7 w-7 text-muted-foreground hover:text-foreground"
              onClick={() => table.resetRowSelection()}
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
