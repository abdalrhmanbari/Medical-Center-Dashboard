import { Sun, Moon, Monitor, Globe, Bell, Shield, User, Palette } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { useAuth } from '@/contexts/AuthContext'
import { roleLabels } from '@/config/navigation'
import { cn } from '@/lib/utils'
import type { Theme, UserRole } from '@/types'

const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

const roles: UserRole[] = ['super_admin', 'receptionist', 'doctor', 'lab_staff', 'dental_staff']

export default function Settings() {
  const { theme, setTheme } = useTheme()
  const { user, switchRole, currentRole } = useAuth()

  return (
    <PageContainer
      title="Settings"
      description="Manage your account and application preferences."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Appearance */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                <Palette className="h-5 w-5 text-violet-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Appearance</h2>
                <p className="text-xs text-muted-foreground">Customize the look and feel</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-foreground">Theme</p>
              <div className="flex gap-3">
                {themeOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={cn(
                      'flex flex-1 flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm transition-all',
                      theme === opt.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <opt.icon className="h-5 w-5" />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Role switcher (demo) */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Demo Role Switcher</h2>
                <p className="text-xs text-muted-foreground">Switch between roles to preview different navigation</p>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {roles.map(role => {
                const info = roleLabels[role]
                return (
                  <button
                    key={role}
                    onClick={() => switchRole(role)}
                    className={cn(
                      'flex items-center gap-3 rounded-xl border-2 p-3.5 text-left transition-all',
                      currentRole === role
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    )}
                  >
                    <div className={cn('h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold', info.color)}>
                      {info.en.charAt(0)}
                    </div>
                    <div>
                      <p className={cn('text-sm font-medium', currentRole === role ? 'text-primary' : 'text-foreground')}>{info.en}</p>
                      <p className="text-xs text-muted-foreground">{info.ar}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10">
                <Bell className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Notifications</h2>
                <p className="text-xs text-muted-foreground">Configure notification preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Appointment reminders', desc: 'Get notified 30 min before appointments' },
                { label: 'New patient registrations', desc: 'Alert when a new patient registers' },
                { label: 'Lab results', desc: 'Notify when lab results are ready' },
                { label: 'System alerts', desc: 'Important system notifications' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <button className="relative h-6 w-11 rounded-full bg-primary transition-colors">
                    <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile card */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                <User className="h-5 w-5 text-emerald-500" />
              </div>
              <h2 className="font-semibold text-foreground">Profile</h2>
            </div>
            {user && (
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-3 py-2">
                  <div className={cn('flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white', roleLabels[user.role].color)}>
                    {user.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium text-foreground">{roleLabels[user.role].en}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                    <span className="text-muted-foreground">Department</span>
                    <span className="font-medium text-foreground">{user.department}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" size="sm">Edit Profile</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
