import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/contexts/SidebarContext'
import { SidebarItem } from './SidebarItem'
import type { NavGroup } from '@/types'

interface SidebarGroupProps {
  group: NavGroup
  isRTL?: boolean
}

export function SidebarGroup({ group, isRTL = false }: SidebarGroupProps) {
  const { isCollapsed } = useSidebar()

  return (
    <div className="mb-1">
      <AnimatePresence>
        {!isCollapsed && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'mb-1 px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40',
              isRTL ? 'text-right' : 'text-left'
            )}
          >
            {isRTL ? group.labelAr : group.label}
          </motion.p>
        )}
      </AnimatePresence>

      {isCollapsed && (
        <div className="my-2 mx-2 h-px bg-sidebar-border/50" />
      )}

      <div className="flex flex-col gap-0.5">
        {group.items.map(item => (
          <SidebarItem key={item.id} item={item} isRTL={isRTL} />
        ))}
      </div>
    </div>
  )
}
