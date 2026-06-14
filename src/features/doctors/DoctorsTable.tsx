import { Download, Trash2 } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { doctorsData } from './data'
import { doctorsColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { DoctorRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'specialty',
    label: 'Specialty',
    options: [
      { label: 'Cardiology',        value: 'Cardiology' },
      { label: 'Dental',            value: 'Dental' },
      { label: 'Internal Medicine', value: 'Internal Medicine' },
      { label: 'Pediatrics',        value: 'Pediatrics' },
      { label: 'Orthopedics',       value: 'Orthopedics' },
      { label: 'Neurology',         value: 'Neurology' },
      { label: 'Dermatology',       value: 'Dermatology' },
      { label: 'Gynecology',        value: 'Gynecology' },
      { label: 'Psychiatry',        value: 'Psychiatry' },
      { label: 'Radiology',         value: 'Radiology' },
    ],
  },
  {
    columnId: 'status',
    label: 'Status',
    options: [
      { label: 'Available', value: 'available' },
      { label: 'Busy',      value: 'busy' },
      { label: 'Off Duty',  value: 'off' },
    ],
  },
]

const bulkActions: BulkAction<DoctorRow>[] = [
  { label: 'Export',  icon: <Download className="h-3.5 w-3.5" />, onClick: rows => console.log('export', rows.map(r => r.id)) },
  { label: 'Remove',  icon: <Trash2 className="h-3.5 w-3.5" />,  onClick: rows => console.log('remove', rows.map(r => r.id)), destructive: true },
]

export function DoctorsTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: doctorsData,
    columns: doctorsColumns,
    pageSize: 10,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search doctors..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No doctors found"
      emptyDescription="No doctors match your current search or filter criteria."
    />
  )
}
