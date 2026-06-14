import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Download, Edit, Ban } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { StatusBadge } from '@/components/badges'
import { cn } from '@/lib/utils'
import type { PayrollRow } from './data'
import type { TableAction } from '@/types/table'

function formatSAR(amount: number) {
  return `SAR ${amount.toLocaleString()}`
}

const rowActions: TableAction<PayrollRow>[] = [
  { label: 'View details', icon: <Eye className="h-3.5 w-3.5" />,      onClick: row => console.log('view', row.id) },
  { label: 'Edit record',  icon: <Edit className="h-3.5 w-3.5" />,     onClick: row => console.log('edit', row.id) },
  { label: 'Export slip',  icon: <Download className="h-3.5 w-3.5" />, onClick: row => console.log('export', row.id), separator: true },
  { label: 'Cancel',       icon: <Ban className="h-3.5 w-3.5" />,      onClick: row => console.log('cancel', row.id), destructive: true, disabled: r => r.status === 'paid' },
]

export const payrollColumns: ColumnDef<PayrollRow>[] = [
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
    accessorKey: 'name',
    meta: { title: 'Employee' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Employee" />,
    cell: ({ row }) => {
      const { name, role } = row.original
      return (
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'department',
    meta: { title: 'Department' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.department}</span>,
  },
  {
    accessorKey: 'period',
    meta: { title: 'Period' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Period" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.period}</span>,
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'base',
    meta: { title: 'Base Salary' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Base Salary" />,
    cell: ({ row }) => <span className="text-sm text-foreground font-medium tabular-nums">{formatSAR(row.original.base)}</span>,
  },
  {
    accessorKey: 'bonus',
    meta: { title: 'Bonus' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Bonus" />,
    cell: ({ row }) => (
      <span className={cn('text-sm font-medium tabular-nums', row.original.bonus > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground')}>
        {row.original.bonus > 0 ? `+${formatSAR(row.original.bonus)}` : '—'}
      </span>
    ),
  },
  {
    accessorKey: 'deductions',
    meta: { title: 'Deductions' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Deductions" />,
    cell: ({ row }) => (
      <span className="text-sm font-medium text-red-500 tabular-nums dark:text-red-400">
        -{formatSAR(row.original.deductions)}
      </span>
    ),
  },
  {
    accessorKey: 'net',
    meta: { title: 'Net Pay' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Net Pay" />,
    cell: ({ row }) => (
      <span className="text-sm font-semibold text-foreground tabular-nums">{formatSAR(row.original.net)}</span>
    ),
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
