import { CheckCheck, Trash2 } from 'lucide-react'
import { DataTable } from '@/components/data-table'
import { useDataTable } from '@/hooks/useDataTable'
import { notificationsData } from './data'
import { notificationsColumns } from './columns'
import type { TableFilterConfig, BulkAction } from '@/types/table'
import type { NotificationRow } from './data'

const filterConfigs: TableFilterConfig[] = [
  {
    columnId: 'type',
    label: 'Type',
    options: [
      { label: 'Appointment', value: 'appointment' },
      { label: 'Alert',       value: 'alert' },
      { label: 'User',        value: 'user' },
      { label: 'Info',        value: 'info' },
      { label: 'System',      value: 'system' },
    ],
  },
  {
    columnId: 'status',
    label: 'Status',
    options: [
      { label: 'Unread', value: 'unread' },
      { label: 'Read',   value: 'read' },
    ],
  },
  {
    columnId: 'priority',
    label: 'Priority',
    options: [
      { label: 'High',   value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low',    value: 'low' },
    ],
  },
]

const bulkActions: BulkAction<NotificationRow>[] = [
  { label: 'Mark as read', icon: <CheckCheck className="h-3.5 w-3.5" />, onClick: rows => console.log('mark read', rows.map(r => r.id)) },
  { label: 'Delete',       icon: <Trash2 className="h-3.5 w-3.5" />,    onClick: rows => console.log('delete', rows.map(r => r.id)), destructive: true },
]

export function NotificationsTable() {
  const { table, globalFilter, setGlobalFilter } = useDataTable({
    data: notificationsData,
    columns: notificationsColumns,
    pageSize: 10,
    getRowId: row => row.id,
  })

  return (
    <DataTable
      table={table}
      globalFilter={globalFilter}
      onGlobalFilterChange={setGlobalFilter}
      searchPlaceholder="Search notifications..."
      filterConfigs={filterConfigs}
      bulkActions={bulkActions}
      emptyTitle="No notifications"
      emptyDescription="No notifications match your current search or filter criteria."
    />
  )
}
