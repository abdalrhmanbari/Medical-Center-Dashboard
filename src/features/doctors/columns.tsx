import type { ColumnDef } from '@tanstack/react-table'
import { Star, Phone, Mail, Pencil, Trash2, Calendar, UserMinus } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader'
import { DataTableRowActions } from '@/components/data-table/DataTableRowActions'
import { StatusBadge } from '@/components/badges'
import { cn } from '@/lib/utils'
import type { DoctorRow } from './data'
import type { TableAction } from '@/types/table'

const specialtyColors: Record<string, string> = {
  Cardiology:        'bg-red-500/10 text-red-600 dark:text-red-400',
  Dental:            'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Internal Medicine':'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  Pediatrics:        'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  Orthopedics:       'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Neurology:         'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Dermatology:       'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  Gynecology:        'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  Ophthalmology:     'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  Endocrinology:     'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  Psychiatry:        'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  Radiology:         'bg-slate-500/10 text-slate-600 dark:text-slate-400',
  Urology:           'bg-lime-500/10 text-lime-600 dark:text-lime-400',
}

const rowActions: TableAction<DoctorRow>[] = [
  { label: 'Edit profile',    icon: <Pencil className="h-3.5 w-3.5" />,    onClick: row => console.log('edit', row.id) },
  { label: 'View schedule',   icon: <Calendar className="h-3.5 w-3.5" />,  onClick: row => console.log('schedule', row.id) },
  { label: 'Mark as off',     icon: <UserMinus className="h-3.5 w-3.5" />, onClick: row => console.log('mark off', row.id), separator: true, disabled: r => r.status === 'off' },
  { label: 'Remove doctor',   icon: <Trash2 className="h-3.5 w-3.5" />,    onClick: row => console.log('remove', row.id), destructive: true },
]

export const doctorsColumns: ColumnDef<DoctorRow>[] = [
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
    meta: { title: 'Doctor' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Doctor" />,
    cell: ({ row }) => {
      const { name, specialty, experience } = row.original
      const initial = name.split(' ')[1]?.charAt(0) ?? name.charAt(0)
      return (
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
            {initial}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{name}</p>
            <p className="text-[11px] text-muted-foreground">{experience} yrs exp.</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'specialty',
    meta: { title: 'Specialty' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Specialty" />,
    cell: ({ row }) => (
      <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium', specialtyColors[row.original.specialty] ?? 'bg-muted text-muted-foreground')}>
        {row.original.specialty}
      </span>
    ),
    filterFn: 'multiSelect',
  },
  {
    accessorKey: 'patients',
    meta: { title: 'Patients' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Patients" />,
    cell: ({ row }) => <span className="text-sm font-medium text-foreground">{row.original.patients}</span>,
  },
  {
    accessorKey: 'rating',
    meta: { title: 'Rating' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Rating" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
        <span className="text-sm font-medium text-foreground">{row.original.rating}</span>
      </div>
    ),
  },
  {
    accessorKey: 'schedule',
    meta: { title: 'Schedule' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Schedule" />,
    cell: ({ row }) => <span className="text-xs text-muted-foreground whitespace-nowrap">{row.original.schedule}</span>,
  },
  {
    accessorKey: 'phone',
    meta: { title: 'Phone' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Phone" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
        <Phone className="h-3.5 w-3.5 shrink-0" />
        {row.original.phone}
      </div>
    ),
  },
  {
    accessorKey: 'email',
    meta: { title: 'Email' },
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Mail className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate max-w-[160px]">{row.original.email}</span>
      </div>
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
