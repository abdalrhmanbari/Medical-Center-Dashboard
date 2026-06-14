import { X, RotateCcw } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { appointmentsData } from './data'
import { appointmentsColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { AppointmentRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'status',
    label: 'Status',
    options: [
      { label: 'Confirmed',    value: 'confirmed' },
      { label: 'Waiting',      value: 'waiting' },
      { label: 'In Progress',  value: 'in_progress' },
      { label: 'Cancelled',    value: 'cancelled' },
    ],
  },
  {
    columnId: 'type',
    label: 'Type',
    options: [
      { label: 'Consultation',  value: 'Consultation' },
      { label: 'Dental Checkup',value: 'Dental Checkup' },
      { label: 'Lab Test',      value: 'Lab Test' },
      { label: 'Follow-up',     value: 'Follow-up' },
      { label: 'Orthopedics',   value: 'Orthopedics' },
      { label: 'Pediatrics',    value: 'Pediatrics' },
    ],
  },
]

const bulkActions: BulkAction<AppointmentRow>[] = [
  { label: 'Reschedule', icon: <RotateCcw className="h-3.5 w-3.5" />, onClick: rows => console.log('reschedule', rows.map(r => r.id)) },
  { label: 'Cancel all', icon: <X className="h-3.5 w-3.5" />,        onClick: rows => console.log('cancel', rows.map(r => r.id)), destructive: true },
]

export function AppointmentsTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: appointmentsData,
    columns: appointmentsColumns,
    pageSize: 10,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search appointments..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No appointments found"
      emptyDescription="No appointments match your current search or filter criteria."
    />
  )
}
