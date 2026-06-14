import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pageSizeOptions?: number[]
}

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [10, 20, 30, 50],
}: DataTablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination
  const totalRows = table.getFilteredRowModel().rows.length
  const pageCount = table.getPageCount()

  const from = pageIndex * pageSize + 1
  const to = Math.min((pageIndex + 1) * pageSize, totalRows)

  return (
    <div className="flex flex-col gap-3 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Row count info */}
      <div className="flex items-center gap-3">
        <p className="text-xs text-muted-foreground">
          {totalRows === 0 ? (
            'No results'
          ) : (
            <>
              <span className="font-medium text-foreground">{from}–{to}</span>
              {' '}of{' '}
              <span className="font-medium text-foreground">{totalRows}</span>
              {' '}results
            </>
          )}
        </p>
        <div className="h-3.5 w-px bg-border hidden sm:block" />
        <div className="hidden sm:flex items-center gap-1.5">
          <label className="text-xs text-muted-foreground whitespace-nowrap">Rows per page</label>
          <select
            value={pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className={cn(
              'h-7 rounded-md border border-input bg-background px-2 text-xs',
              'focus:outline-none focus:ring-2 focus:ring-ring',
              'cursor-pointer'
            )}
          >
            {pageSizeOptions.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft className="h-3.5 w-3.5" />
          <span className="sr-only">First page</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center gap-1 mx-1">
          {Array.from({ length: Math.min(pageCount, 5) }).map((_, i) => {
            let pageNum: number
            if (pageCount <= 5) {
              pageNum = i
            } else if (pageIndex < 3) {
              pageNum = i
            } else if (pageIndex > pageCount - 4) {
              pageNum = pageCount - 5 + i
            } else {
              pageNum = pageIndex - 2 + i
            }

            return (
              <Button
                key={pageNum}
                variant={pageNum === pageIndex ? 'default' : 'outline'}
                size="icon"
                className="h-7 w-7 text-xs"
                onClick={() => table.setPageIndex(pageNum)}
              >
                {pageNum + 1}
              </Button>
            )
          })}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="sr-only">Next page</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => table.setPageIndex(pageCount - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight className="h-3.5 w-3.5" />
          <span className="sr-only">Last page</span>
        </Button>
      </div>
    </div>
  )
}
