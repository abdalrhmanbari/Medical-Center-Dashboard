import { SlidersHorizontal, Eye } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DataTableSearch } from './DataTableSearch'
import { DataTableFilters } from './DataTableFilters'
import { DataTableBulkActions } from './DataTableBulkActions'
import type { TableFilterConfig, BulkAction } from '@/types/table'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  globalFilter: string
  onGlobalFilterChange: (value: string) => void
  searchPlaceholder?: string
  filterConfigs?: TableFilterConfig[]
  bulkActions?: BulkAction<TData>[]
  toolbarExtra?: React.ReactNode
  enableColumnVisibility?: boolean
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  onGlobalFilterChange,
  searchPlaceholder,
  filterConfigs = [],
  bulkActions = [],
  toolbarExtra,
  enableColumnVisibility = true,
}: DataTableToolbarProps<TData>) {
  const hidableColumns = table.getAllColumns().filter(col => col.getCanHide())

  return (
    <div className="border-b border-border">
      {bulkActions.length > 0 && (
        <DataTableBulkActions table={table} bulkActions={bulkActions} />
      )}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        <DataTableSearch
          value={globalFilter}
          onChange={onGlobalFilterChange}
          placeholder={searchPlaceholder}
        />

        {filterConfigs.length > 0 && (
          <>
            <div className="h-5 w-px bg-border hidden sm:block" />
            <DataTableFilters table={table} filterConfigs={filterConfigs} />
          </>
        )}

        <div className="ml-auto flex items-center gap-2">
          {toolbarExtra}

          {enableColumnVisibility && hidableColumns.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                  <Eye className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Columns</span>
                  <SlidersHorizontal className="h-3.5 w-3.5 sm:hidden" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel className="text-[11px]">Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {hidableColumns.map(column => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize text-sm"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {(column.columnDef.meta as { title?: string } | undefined)?.title ?? column.id}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  )
}
