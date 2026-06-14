import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { UserDropdown } from './UserDropdown'

export function NavbarActions() {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-xl">
        <Search className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-xl">
        <Bell className="h-4 w-4" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
      </Button>

      <ThemeToggle />

      <div className="mx-1 h-6 w-px bg-border" />

      <UserDropdown />
    </div>
  )
}
