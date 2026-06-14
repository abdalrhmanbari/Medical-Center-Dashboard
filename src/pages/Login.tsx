import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Activity, Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import type { UserRole } from '@/types'

const demoAccounts: { role: UserRole; label: string; email: string }[] = [
  { role: 'super_admin', label: 'Super Admin', email: 'admin@medcenter.com' },
  { role: 'receptionist', label: 'Receptionist', email: 'reception@medcenter.com' },
  { role: 'doctor', label: 'Doctor', email: 'doctor@medcenter.com' },
  { role: 'lab_staff', label: 'Lab Staff', email: 'lab@medcenter.com' },
  { role: 'dental_staff', label: 'Dental Staff', email: 'dental@medcenter.com' },
]

export default function Login() {
  const { isAuthenticated, login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<UserRole>('super_admin')

  if (isAuthenticated) return <Navigate to="/dashboard" replace />

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Activity className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">MedCenter</h1>
              <p className="text-sm text-muted-foreground mt-1">Medical Center Management System</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                defaultValue={demoAccounts.find(a => a.role === selectedRole)?.email}
                className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                readOnly
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="demo1234"
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={() => login(selectedRole)}>
              Sign In as {demoAccounts.find(a => a.role === selectedRole)?.label}
            </Button>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-center text-xs font-medium text-muted-foreground">DEMO ACCOUNTS</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {demoAccounts.map(acc => (
                <button
                  key={acc.role}
                  onClick={() => setSelectedRole(acc.role)}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition-all text-center ${
                    selectedRole === acc.role
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {acc.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
