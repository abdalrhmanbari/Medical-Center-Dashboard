import type { ColumnDef } from '@tanstack/react-table'
import { Shield, Pencil, Trash2, KeyRound, UserX } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { StatusBadge } from '@/components/badges'
import { roleLabels } from '@/config/navigation'
import { cn } from '@/lib/utils'
import type { UserRow } from './data'
import type { TableAction } from '@/types/table'

const roleColorMap: Record<string, string> = {
  super_admin:  'bg-violet-500',
  receptionist: 'bg-blue-500',
  doctor:       'bg-emerald-500',
  lab_staff:    'bg-amber-500',
  dental_staff: 'bg-pink-500',
}

const rowActions: TableAction<UserRow>[] = [
  { label: 'Edit user',    icon: <Pencil className="h-3.5 w-3.5" />,  onClick: row => console.log('edit', row.id) },
  { label: 'Reset password', icon: <KeyRound className="h-3.5 w-3.5" />, onClick: row => console.log('reset', row.id), separator: true },
  { label: 'Deactivate',  icon: <UserX className="h-3.5 w-3.5" />,   onClick: row => console.log('deactivate', row.id), destructive: true, disabled: r => r.status === 'inactive' },
  { label: 'Delete user', icon: <Trash2 className="h-3.5 w-3.5" />,  onClick: row => console.log('delete', row.id), destructive: true },
]

export const usersColumns: ColumnDef<UserRow>[] = [
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
    meta: { title: 'User' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
    cell: ({ row }) => {
      const { name, email, role } = row.original
      const bgColor = roleColorMap[role] ?? 'bg-primary'
      return (
        <div className="flex items-center gap-3 min-w-0">
          <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white', bgColor)}>
            {name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{name}</p>
            <p className="text-xs text-muted-foreground truncate">{email}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'role',
    meta: { title: 'Role' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    cell: ({ row }) => {
      const roleInfo = roleLabels[row.original.role]
      return (
        <div className="flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="text-sm text-foreground whitespace-nowrap">{roleInfo.en}</span>
        </div>
      )
    },
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'department',
    meta: { title: 'Department' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    cell: ({ row }) => <span className="text-sm text-muted-foreground whitespace-nowrap">{row.original.department}</span>,
  },
  {
    accessorKey: 'status',
    meta: { title: 'Status' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'joined',
    meta: { title: 'Joined' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Joined" />,
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {new Date(row.original.joined).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </span>
    ),
  },
  {
    accessorKey: 'lastActive',
    meta: { title: 'Last Active' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Last Active" />,
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {new Date(row.original.lastActive).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
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
