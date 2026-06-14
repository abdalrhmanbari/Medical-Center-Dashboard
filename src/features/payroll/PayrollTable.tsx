import { Download, Trash2 } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { payrollData } from './data'
import { payrollColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { PayrollRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'status',
    label: 'Status',
    options: [
      { label: 'Paid',       value: 'paid' },
      { label: 'Pending',    value: 'pending' },
      { label: 'Processing', value: 'processing' },
    ],
  },
  {
    columnId: 'period',
    label: 'Period',
    options: [
      { label: 'May 2026', value: 'May 2026' },
      { label: 'Apr 2026', value: 'Apr 2026' },
    ],
  },
]

const bulkActions: BulkAction<PayrollRow>[] = [
  { label: 'Export slips', icon: <Download className="h-3.5 w-3.5" />, onClick: rows => console.log('export', rows.map(r => r.id)) },
  { label: 'Cancel',       icon: <Trash2 className="h-3.5 w-3.5" />,  onClick: rows => console.log('cancel', rows.map(r => r.id)), destructive: true },
]

export function PayrollTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: payrollData,
    columns: payrollColumns,
    pageSize: 10,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search payroll..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No payroll records"
      emptyDescription="No payroll entries match your current search or filter criteria."
    />
  )
}
