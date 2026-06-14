import { flexRender } from '@tanstack/react-table'
import type { Table } from '@tanstack/react-table'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import { DataTableSkeleton } from './DataTableSkeleton'
import { DataTableEmpty } from './DataTableEmpty'
import { DataTableToolbar } from './DataTableToolbar'
import { DataTablePagination } from './DataTablePagination'
import type { TableFilterConfig, BulkAction } from '@/types/table'

interface DataTableProps<TData> {
  table: Table<TData>
  globalFilter: string
  onGlobalFilterChange: (value: string) => void
  isLoading?: boolean
  skeletonRows?: number
  emptyTitle?: string
  emptyDescription?: string
  emptyIcon?: ReactNode
  searchPlaceholder?: string
  filterConfigs?: TableFilterConfig[]
  bulkActions?: BulkAction<TData>[]
  toolbarExtra?: ReactNode
  enableColumnVisibility?: boolean
  pageSizeOptions?: number[]
  className?: string
}

export function DataTable<TData>({
  table,
  globalFilter,
  onGlobalFilterChange,
  isLoading = false,
  skeletonRows = 8,
  emptyTitle = 'No results found',
  emptyDescription = 'Try adjusting your search or filter criteria.',
  emptyIcon,
  searchPlaceholder,
  filterConfigs,
  bulkActions,
  toolbarExtra,
  enableColumnVisibility,
  pageSizeOptions,
}: DataTableProps<TData>) {
  const rows = table.getRowModel().rows
  const visibleColumnCount = table.getVisibleLeafColumns().length

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <DataTableToolbar
        table={table}
        globalFilter={globalFilter}
        onGlobalFilterChange={onGlobalFilterChange}
        searchPlaceholder={searchPlaceholder}
        filterConfigs={filterConfigs}
        bulkActions={bulkActions}
        toolbarExtra={toolbarExtra}
        enableColumnVisibility={enableColumnVisibility}
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="border-b border-border bg-muted/30">
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left whitespace-nowrap"
                    style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border">
            {isLoading ? (
              <DataTableSkeleton rows={skeletonRows} columns={visibleColumnCount} />
            ) : rows.length === 0 ? (
              <DataTableEmpty
                columns={visibleColumnCount}
                title={emptyTitle}
                description={emptyDescription}
                icon={emptyIcon}
              />
            ) : (
              <AnimatePresence mode="popLayout" initial={false}>
                {rows.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, delay: Math.min(index * 0.018, 0.18) }}
                    data-state={row.getIsSelected() ? 'selected' : undefined}
                    className="hover:bg-muted/30 transition-colors data-[state=selected]:bg-primary/[0.04]"
                  >
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="px-4 py-3 text-sm align-middle">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>

      <DataTablePagination table={table} pageSizeOptions={pageSizeOptions} />
    </div>
  )
}
