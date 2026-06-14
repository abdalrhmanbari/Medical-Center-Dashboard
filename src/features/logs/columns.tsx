import type { ColumnDef } from '@tanstack/react-table'
import { Info, CheckCircle, AlertCircle, XCircle, Eye, Download } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { cn } from '@/lib/utils'
import type { LogRow, LogLevel } from './data'
import type { TableAction } from '@/types/table'

const levelConfig: Record<LogLevel, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string; label: string }> = {
  info:    { icon: Info,        color: 'text-blue-500',    bg: 'bg-blue-500/10',    label: 'Info' },
  success: { icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10', label: 'Success' },
  warning: { icon: AlertCircle, color: 'text-amber-500',   bg: 'bg-amber-500/10',   label: 'Warning' },
  error:   { icon: XCircle,     color: 'text-red-500',     bg: 'bg-red-500/10',     label: 'Error' },
}

const rowActions: TableAction<LogRow>[] = [
  { label: 'View full log', icon: <Eye className="h-3.5 w-3.5" />,      onClick: row => console.log('view', row.id) },
  { label: 'Export entry',  icon: <Download className="h-3.5 w-3.5" />, onClick: row => console.log('export', row.id) },
]

export const logsColumns: ColumnDef<LogRow>[] = [
  {
    accessorKey: 'level',
    meta: { title: 'Level' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Level" />,
    cell: ({ row }) => {
      const cfg = levelConfig[row.original.level]
      const Icon = cfg.icon
      return (
        <div className={cn('flex h-7 w-7 items-center justify-center rounded-lg', cfg.bg)}>
          <Icon className={cn('h-3.5 w-3.5', cfg.color)} />
        </div>
      )
    },
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'id',
    meta: { title: 'Log ID' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Log ID" />,
    cell: ({ row }) => <span className="text-xs font-mono text-muted-foreground">{row.original.id}</span>,
  },
  {
    accessorKey: 'action',
    meta: { title: 'Action' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Action" />,
    cell: ({ row }) => <span className="text-sm font-medium text-foreground whitespace-nowrap">{row.original.action}</span>,
  },
  {
    accessorKey: 'module',
    meta: { title: 'Module' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Module" />,
    cell: ({ row }) => (
      <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
        {row.original.module}
      </span>
    ),
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'user',
    meta: { title: 'User' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.original.user}</span>,
  },
  {
    accessorKey: 'ip',
    meta: { title: 'IP Address' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="IP Address" />,
    cell: ({ row }) => <span className="text-xs font-mono text-muted-foreground">{row.original.ip}</span>,
  },
  {
    accessorKey: 'timestamp',
    meta: { title: 'Timestamp' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Timestamp" />,
    cell: ({ row }) => <span className="text-xs text-muted-foreground whitespace-nowrap">{row.original.timestamp}</span>,
  },
  {
    accessorKey: 'details',
    meta: { title: 'Details' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground max-w-xs truncate block" title={row.original.details}>
        {row.original.details}
      </span>
    ),
  },
  {
    id: 'actions',
    size: 48,
    enableHiding: false,
    cell: ({ row }) => <DataTableRowActions row={row.original} actions={rowActions} />,
  },
]
