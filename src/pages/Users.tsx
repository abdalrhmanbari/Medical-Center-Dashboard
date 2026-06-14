import { Plus } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { UsersTable } from '@/features/users/UsersTable'

export default function Users() {
  return (
    <PageContainer
      title="Users"
      description="Manage system users and their access levels."
      actions={
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add User
        </Button>
      }
    >
      <UsersTable />
    </PageContainer>
  )
}
