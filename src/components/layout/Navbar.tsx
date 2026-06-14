import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { NavbarActions } from '@/components/navigation/NavbarActions'
import { useSidebar } from '@/contexts/SidebarContext'
import { cn } from '@/lib/utils'

interface NavbarProps {
  isRTL?: boolean
}

export function Navbar({ isRTL = false }: NavbarProps) {
  const { toggleMobile, toggleCollapse, isCollapsed } = useSidebar()

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80'
      )}
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {/* Mobile menu trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-xl lg:hidden"
        onClick={toggleMobile}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop collapse toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden h-9 w-9 rounded-xl lg:flex"
        onClick={toggleCollapse}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex flex-1 items-center justify-between">
        <Breadcrumbs />
        <NavbarActions />
      </div>
    </motion.header>
  )
}
