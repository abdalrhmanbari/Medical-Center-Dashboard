import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Activity, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/contexts/SidebarContext'
import { useAuth } from '@/contexts/AuthContext'
import { getRoleNav, roleLabels } from '@/config/navigation'
import { SidebarGroup } from '@/components/navigation/SidebarGroup'
import { UserDropdown } from '@/components/navigation/UserDropdown'
import type { UserRole } from '@/types'

const SIDEBAR_WIDTH = 260
const SIDEBAR_COLLAPSED_WIDTH = 68

interface SidebarProps {
  isRTL?: boolean
}

export function Sidebar({ isRTL = false }: SidebarProps) {
  const { isCollapsed, isMobileOpen, toggleCollapse, closeMobile } = useSidebar()
  const { user } = useAuth()

  const navGroups = user ? getRoleNav(user.role) : []
  const roleInfo = user ? roleLabels[user.role] : null

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: isRTL ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              'fixed inset-y-0 z-50 flex flex-col bg-sidebar border-sidebar-border shadow-xl lg:hidden',
              isRTL ? 'right-0 border-l' : 'left-0 border-r'
            )}
            style={{ width: SIDEBAR_WIDTH }}
          >
            <SidebarContent
              isCollapsed={false}
              isRTL={isRTL}
              navGroups={navGroups}
              roleInfo={roleInfo}
              user={user}
              onCollapse={closeMobile}
              isMobile
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.aside
        animate={{ width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          'hidden lg:flex flex-col shrink-0 border-sidebar-border bg-sidebar',
          isRTL ? 'border-l' : 'border-r'
        )}
      >
        <SidebarContent
          isCollapsed={isCollapsed}
          isRTL={isRTL}
          navGroups={navGroups}
          roleInfo={roleInfo}
          user={user}
          onCollapse={toggleCollapse}
        />
      </motion.aside>
    </>
  )
}

interface SidebarContentProps {
  isCollapsed: boolean
  isRTL: boolean
  navGroups: ReturnType<typeof getRoleNav>
  roleInfo: (typeof roleLabels)[UserRole] | null
  user: ReturnType<typeof useAuth>['user']
  onCollapse: () => void
  isMobile?: boolean
}

function SidebarContent({
  isCollapsed,
  isRTL,
  navGroups,
  roleInfo,
  user,
  onCollapse,
  isMobile = false,
}: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Logo / Brand */}
      <div
        className={cn(
          'flex h-16 shrink-0 items-center border-b border-sidebar-border px-4',
          isCollapsed ? 'justify-center' : 'justify-between'
        )}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-sidebar-foreground">MedCenter</p>
              <p className="text-[10px] text-sidebar-foreground/50 mt-0.5">Management System</p>
            </div>
          </div>
        )}

        {isCollapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
        )}

        <button
          onClick={onCollapse}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-lg text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground',
            isCollapsed && 'hidden'
          )}
        >
          {isMobile ? (
            <X className="h-4 w-4" />
          ) : isRTL ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Role badge */}
      {!isCollapsed && roleInfo && (
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 rounded-lg bg-sidebar-accent/50 px-3 py-2">
            <Shield className="h-3.5 w-3.5 text-sidebar-foreground/60" />
            <span className="text-xs font-medium text-sidebar-foreground/80">
              {isRTL ? roleInfo.ar : roleInfo.en}
            </span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 scrollbar-thin">
        {navGroups.map(group => (
          <SidebarGroup key={group.id} group={group} isRTL={isRTL} />
        ))}
      </div>

      {/* Bottom user section */}
      <div className={cn('shrink-0 border-t border-sidebar-border p-3', isCollapsed && 'flex justify-center')}>
        <UserDropdown compact={isCollapsed} />
      </div>
    </div>
  )
}
