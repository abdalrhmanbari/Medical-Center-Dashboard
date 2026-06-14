import { cn } from '@/lib/utils'

interface DataTableSkeletonProps {
  rows?: number
  columns?: number
}

function SkeletonCell({ width }: { width?: string }) {
  return (
    <div
      className={cn('h-4 rounded-md bg-muted animate-pulse', width ?? 'w-full')}
    />
  )
}

const columnWidths = ['w-8', 'w-32', 'w-24', 'w-20', 'w-16', 'w-20', 'w-12', 'w-8']

export function DataTableSkeleton({ rows = 8, columns = 6 }: DataTableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="border-b border-border"
          style={{ opacity: 1 - rowIndex * (0.85 / rows) }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="px-4 py-3.5">
              <SkeletonCell width={columnWidths[colIndex % columnWidths.length]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
