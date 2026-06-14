import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { SidebarProvider } from '@/contexts/SidebarContext'

export function AppLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          <Outlet />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
