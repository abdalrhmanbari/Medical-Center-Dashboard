import { Filter, X, Check } from 'lucide-react'
import type { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { TableFilterConfig } from '@/types/table'

interface DataTableFiltersProps<TData> {
  table: Table<TData>
  filterConfigs: TableFilterConfig[]
}

export function DataTableFilters<TData>({ table, filterConfigs }: DataTableFiltersProps<TData>) {
  const activeFilterCount = filterConfigs.reduce((acc, cfg) => {
    const col = table.getColumn(cfg.columnId)
    const val = col?.getFilterValue() as string[] | undefined
    return acc + (val?.length ?? 0)
  }, 0)

  function handleClearAll() {
    filterConfigs.forEach(cfg => {
      table.getColumn(cfg.columnId)?.setFilterValue(undefined)
    })
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filterConfigs.map(config => {
        const column = table.getColumn(config.columnId)
        if (!column) return null
        const selectedValues = (column.getFilterValue() as string[]) ?? []

        return (
          <DropdownMenu key={config.columnId}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  'gap-1.5 h-8 text-xs',
                  selectedValues.length > 0 && 'border-primary/60 bg-primary/5 text-primary hover:bg-primary/10'
                )}
              >
                <Filter className="h-3.5 w-3.5" />
                {config.label}
                {selectedValues.length > 0 && (
                  <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {selectedValues.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              <DropdownMenuLabel className="text-[11px]">{config.label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {config.options.map(option => {
                const isSelected = selectedValues.includes(option.value)
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      const next = isSelected
                        ? selectedValues.filter(v => v !== option.value)
                        : [...selectedValues, option.value]
                      column.setFilterValue(next.length ? next : undefined)
                    }}
                    className={cn(
                      'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                      'hover:bg-accent hover:text-accent-foreground transition-colors',
                      isSelected && 'text-primary font-medium'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-4 w-4 items-center justify-center rounded border',
                        isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground/30'
                      )}
                    >
                      {isSelected && <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                    {option.icon && <span className="shrink-0">{option.icon}</span>}
                    {option.label}
                  </button>
                )
              })}
              {selectedValues.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <button
                    onClick={() => column.setFilterValue(undefined)}
                    className="flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear filter
                  </button>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )
      })}

      {activeFilterCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          onClick={handleClearAll}
        >
          <X className="h-3.5 w-3.5" />
          Clear all
        </Button>
      )}
    </div>
  )
}
