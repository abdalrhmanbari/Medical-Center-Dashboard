import type { ColumnDef } from '@tanstack/react-table'
import { CalendarCheck, AlertCircle, User, Info, Settings, Eye, Trash2, CheckCheck, BellOff } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { StatusBadge } from '@/components/badges'
import { cn } from '@/lib/utils'
import type { NotificationRow, NotificationType } from './data'
import type { TableAction } from '@/types/table'

const typeConfig: Record<NotificationType, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  appointment: { icon: CalendarCheck, color: 'text-blue-500',    bg: 'bg-blue-500/10' },
  alert:       { icon: AlertCircle,   color: 'text-amber-500',   bg: 'bg-amber-500/10' },
  user:        { icon: User,          color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  info:        { icon: Info,          color: 'text-violet-500',  bg: 'bg-violet-500/10' },
  system:      { icon: Settings,      color: 'text-slate-500',   bg: 'bg-slate-500/10' },
}

const priorityConfig = {
  high:   'text-red-600 bg-red-500/10 dark:text-red-400',
  medium: 'text-amber-600 bg-amber-500/10 dark:text-amber-400',
  low:    'text-muted-foreground bg-muted',
}

const rowActions: TableAction<NotificationRow>[] = [
  { label: 'View',           icon: <Eye className="h-3.5 w-3.5" />,       onClick: row => console.log('view', row.id) },
  { label: 'Mark as read',   icon: <CheckCheck className="h-3.5 w-3.5" />,onClick: row => console.log('read', row.id), disabled: r => r.status === 'read' },
  { label: 'Mute type',      icon: <BellOff className="h-3.5 w-3.5" />,   onClick: row => console.log('mute', row.id), separator: true },
  { label: 'Delete',         icon: <Trash2 className="h-3.5 w-3.5" />,    onClick: row => console.log('delete', row.id), destructive: true },
]

export const notificationsColumns: ColumnDef<NotificationRow>[] = [
  {
    id: 'select',
    size: 40,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
        onCheckedChange={v => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={v => row.toggleSelected(!!v)}
        aria-label="Select row"
        onClick={e => e.stopPropagation()}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    meta: { title: 'Type' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => {
      const cfg = typeConfig[row.original.type]
      const Icon = cfg.icon
      return (
        <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg', cfg.bg)}>
          <Icon className={cn('h-4 w-4', cfg.color)} />
        </div>
      )
    },
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'title',
    meta: { title: 'Notification' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Notification" />,
    cell: ({ row }) => {
      const { title, message, status } = row.original
      return (
        <div className="max-w-xs lg:max-w-sm xl:max-w-md min-w-0">
          <div className="flex items-center gap-2">
            <p className={cn('text-sm font-medium truncate', status === 'unread' ? 'text-foreground' : 'text-muted-foreground')}>
              {title}
            </p>
            {status === 'unread' && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground truncate">{message}</p>
        </div>
      )
    },
  },
  {
    accessorKey: 'priority',
    meta: { title: 'Priority' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
    cell: ({ row }) => (
      <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium capitalize', priorityConfig[row.original.priority])}>
        {row.original.priority}
      </span>
    ),
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'time',
    meta: { title: 'Time' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Time" />,
    cell: ({ row }) => <span className="text-xs text-muted-foreground whitespace-nowrap">{row.original.time}</span>,
  },
  {
    accessorKey: 'status',
    meta: { title: 'Status' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
    filterFn: 'multiSelect',
  },
  {
    id: 'actions',
    size: 48,
    enableHiding: false,
    cell: ({ row }) => <DataTableRowActions row={row.original} actions={rowActions} />,
  },
]
