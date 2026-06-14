import type { FilterFn, ColumnDef, Table } from '@tanstack/react-table'
import type { ReactNode } from 'react'

// ─── Status Variants ────────────────────────────────────────────────────────

export type StatusVariant =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'paid'
  | 'cancelled'
  | 'warning'
  | 'success'
  | 'info'
  | 'error'
  | 'available'
  | 'busy'
  | 'off'
  | 'confirmed'
  | 'waiting'
  | 'in_progress'
  | 'unread'
  | 'read'
  | 'processing'

// ─── Action Definitions ─────────────────────────────────────────────────────

export interface TableAction<TData> {
  label: string
  icon?: ReactNode
  onClick: (row: TData) => void
  destructive?: boolean
  disabled?: (row: TData) => boolean
  separator?: boolean
}

// ─── Filter Definitions ─────────────────────────────────────────────────────

export interface TableFilterOption {
  label: string
  value: string
  icon?: ReactNode
}

export interface TableFilterConfig {
  columnId: string
  label: string
  options: TableFilterOption[]
}

// ─── Bulk Actions ───────────────────────────────────────────────────────────

export interface BulkAction<TData> {
  label: string
  icon?: ReactNode
  onClick: (rows: TData[]) => void
  destructive?: boolean
}

// ─── Hook Options / Return ──────────────────────────────────────────────────

export interface UseDataTableOptions<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  pageSize?: number
  enableRowSelection?: boolean
  getRowId?: (row: TData) => string
}

export interface UseDataTableReturn<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

// ─── Custom Filter Function Types ───────────────────────────────────────────

export type MultiSelectFilterFn = FilterFn<unknown>

// ─── Column Meta ─────────────────────────────────────────────────────────────

declare module '@tanstack/react-table' {
  interface FilterFns {
    multiSelect: FilterFn<unknown>
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    title?: string
  }
}
