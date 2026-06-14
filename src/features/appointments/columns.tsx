import type { ColumnDef } from '@tanstack/react-table'
import { Clock, Eye, Pencil, X, RotateCcw } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { StatusBadge } from '@/components/badges'
import type { AppointmentRow } from './data'
import type { TableAction } from '@/types/table'

const rowActions: TableAction<AppointmentRow>[] = [
  { label: 'View details',   icon: <Eye className="h-3.5 w-3.5" />,      onClick: row => console.log('view', row.id) },
  { label: 'Edit',           icon: <Pencil className="h-3.5 w-3.5" />,   onClick: row => console.log('edit', row.id) },
  { label: 'Reschedule',     icon: <RotateCcw className="h-3.5 w-3.5" />,onClick: row => console.log('reschedule', row.id), separator: true },
  { label: 'Cancel',         icon: <X className="h-3.5 w-3.5" />,        onClick: row => console.log('cancel', row.id), destructive: true, disabled: r => r.status === 'cancelled' },
]

export const appointmentsColumns: ColumnDef<AppointmentRow>[] = [
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
    accessorKey: 'id',
    meta: { title: 'ID' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <span className="text-xs font-mono text-muted-foreground">{row.original.id}</span>,
    enableHiding: false,
  },
  {
    accessorKey: 'patient',
    meta: { title: 'Patient' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Patient" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
          {row.original.patient.charAt(0)}
        </div>
        <span className="text-sm font-medium text-foreground truncate">{row.original.patient}</span>
      </div>
    ),
  },
  {
    accessorKey: 'doctor',
    meta: { title: 'Doctor' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Doctor" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.doctor}</span>,
  },
  {
    id: 'datetime',
    accessorFn: row => `${row.date} ${row.time}`,
    meta: { title: 'Date & Time' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date & Time" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-sm text-foreground whitespace-nowrap">
        <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        <span>{new Date(row.original.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
        <span className="text-muted-foreground">·</span>
        <span>{row.original.time}</span>
      </div>
    ),
  },
  {
    accessorKey: 'type',
    meta: { title: 'Type' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.type}</span>,
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'room',
    meta: { title: 'Room' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Room" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.room}</span>,
  },
  {
    accessorKey: 'duration',
    meta: { title: 'Duration' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Duration" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.duration} min</span>,
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
