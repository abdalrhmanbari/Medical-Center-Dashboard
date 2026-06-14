import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import type { ReactNode } from 'react'

interface DataTableEmptyProps {
  columns: number
  title?: string
  description?: string
  icon?: ReactNode
}

export function DataTableEmpty({
  columns,
  title = 'No results found',
  description = 'Try adjusting your search or filter criteria.',
  icon,
}: DataTableEmptyProps) {
  return (
    <tr>
      <td colSpan={columns}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center py-16 px-4"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/60 mb-4">
            {icon ?? <Search className="h-6 w-6 text-muted-foreground" />}
          </div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground text-center max-w-xs">{description}</p>
        </motion.div>
      </td>
    </tr>
  )
}
