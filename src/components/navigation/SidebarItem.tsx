import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/contexts/SidebarContext'
import type { NavItem } from '@/types'

interface SidebarItemProps {
  item: NavItem
  isRTL?: boolean
}

export function SidebarItem({ item, isRTL = false }: SidebarItemProps) {
  const { pathname } = useLocation()
  const { isCollapsed, closeMobile } = useSidebar()
  const isActive = pathname === item.path || pathname.startsWith(item.path + '/')

  const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>

  return (
    <Link
      to={item.path}
      onClick={closeMobile}
      className={cn(
        'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
        isCollapsed ? 'justify-center px-2' : '',
        isActive
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 rounded-xl bg-primary"
          style={{ zIndex: -1 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}

      {IconComponent && (
        <span className={cn('shrink-0', isActive ? 'text-primary-foreground' : '')}>
          <IconComponent className="h-[18px] w-[18px]" />
        </span>
      )}

      {!isCollapsed && (
        <span className={cn('flex-1 truncate', isRTL ? 'text-right' : 'text-left')}>
          {isRTL ? item.labelAr : item.label}
        </span>
      )}

      {!isCollapsed && item.badge !== undefined && (
        <span
          className={cn(
            'flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold',
            isActive
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-primary/10 text-primary'
          )}
        >
          {item.badge}
        </span>
      )}

      {isCollapsed && item.badge !== undefined && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
          {item.badge}
        </span>
      )}

      {isCollapsed && (
        <div
          className={cn(
            'pointer-events-none absolute z-50 ml-2 rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md opacity-0 transition-opacity group-hover:opacity-100',
            isRTL ? 'right-full mr-2' : 'left-full'
          )}
        >
          {isRTL ? item.labelAr : item.label}
        </div>
      )}
    </Link>
  )
}
