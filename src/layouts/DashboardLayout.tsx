import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Sidebar } from '@/components/layout/Sidebar'
import { Navbar } from '@/components/layout/Navbar'

interface DashboardLayoutProps {
  isRTL?: boolean
}

export function DashboardLayout({ isRTL = false }: DashboardLayoutProps) {
  const location = useLocation()

  return (
    <div className="flex h-screen overflow-hidden bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Sidebar isRTL={isRTL} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar isRTL={isRTL} />

        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
