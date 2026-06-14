import { Plus } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { AppointmentsTable } from '@/features/appointments/AppointmentsTable'

export default function Appointments() {
  return (
    <PageContainer
      title="Appointments"
      description="Schedule and manage patient appointments."
      actions={
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      }
    >
      <AppointmentsTable />
    </PageContainer>
  )
}
