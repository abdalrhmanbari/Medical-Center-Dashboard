import { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  type FilterFn,
} from '@tanstack/react-table'
import type { UseDataTableOptions, UseDataTableReturn } from '@/types/table'

// Multi-select column filter: filter value is string[], row value is string
const multiSelectFilter: FilterFn<unknown> = (row, columnId, filterValues: string[]) => {
  if (!filterValues || filterValues.length === 0) return true
  const value = String(row.getValue(columnId))
  return filterValues.includes(value)
}
multiSelectFilter.autoRemove = (val: unknown) => !val || (val as string[]).length === 0

export function useDataTable<TData>({
  data,
  columns,
  pageSize = 10,
  enableRowSelection = true,
  getRowId,
}: UseDataTableOptions<TData>): UseDataTableReturn<TData> {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      multiSelect: multiSelectFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: { pageSize },
    },
    enableRowSelection,
    getRowId,
  })

  return { table, globalFilter, setGlobalFilter }
}
