import { Download, Trash2, UserX } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { usersData } from './data'
import { usersColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { UserRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'role',
    label: 'Role',
    options: [
      { label: 'Super Admin',   value: 'super_admin' },
      { label: 'Receptionist',  value: 'receptionist' },
      { label: 'Doctor',        value: 'doctor' },
      { label: 'Lab Staff',     value: 'lab_staff' },
      { label: 'Dental Staff',  value: 'dental_staff' },
    ],
  },
  {
    columnId: 'status',
    label: 'Status',
    options: [
      { label: 'Active',   value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
  },
]

const bulkActions: BulkAction<UserRow>[] = [
  { label: 'Deactivate', icon: <UserX className="h-3.5 w-3.5" />,  onClick: rows => console.log('bulk deactivate', rows.map(r => r.id)) },
  { label: 'Export',     icon: <Download className="h-3.5 w-3.5" />, onClick: rows => console.log('bulk export', rows.map(r => r.id)) },
  { label: 'Delete',     icon: <Trash2 className="h-3.5 w-3.5" />,  onClick: rows => console.log('bulk delete', rows.map(r => r.id)), destructive: true },
]

export function UsersTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: usersData,
    columns: usersColumns,
    pageSize: 10,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search users..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No users found"
      emptyDescription="No users match your current search or filter criteria."
    />
  )
}
