import { Download } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { logsData } from './data'
import { logsColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { LogRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'level',
    label: 'Level',
    options: [
      { label: 'Info',    value: 'info' },
      { label: 'Success', value: 'success' },
      { label: 'Warning', value: 'warning' },
      { label: 'Error',   value: 'error' },
    ],
  },
  {
    columnId: 'module',
    label: 'Module',
    options: [
      { label: 'Auth',          value: 'Auth' },
      { label: 'Appointments',  value: 'Appointments' },
      { label: 'Users',         value: 'Users' },
      { label: 'Payroll',       value: 'Payroll' },
      { label: 'Lab',           value: 'Lab' },
      { label: 'System',        value: 'System' },
      { label: 'Reports',       value: 'Reports' },
      { label: 'Billing',       value: 'Billing' },
    ],
  },
]

const bulkActions: BulkAction<LogRow>[] = [
  { label: 'Export selected', icon: <Download className="h-3.5 w-3.5" />, onClick: rows => console.log('export', rows.map(r => r.id)) },
]

export function LogsTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: logsData,
    columns: logsColumns,
    pageSize: 10,
    enableRowSelection: false,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search logs..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No logs found"
      emptyDescription="No log entries match your current search or filter criteria."
    />
  )
}
