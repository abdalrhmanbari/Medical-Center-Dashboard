import { Plus } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { DoctorsTable } from '@/features/doctors/DoctorsTable'

export default function Doctors() {
  return (
    <PageContainer
      title="Doctors"
      description="Manage medical staff and their specializations."
      actions={
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add Doctor
        </Button>
      }
    >
      <DoctorsTable />
    </PageContainer>
  )
}
